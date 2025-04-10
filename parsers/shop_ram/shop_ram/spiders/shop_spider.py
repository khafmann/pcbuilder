import scrapy
from scrapy import Request
from scrapy.exceptions import CloseSpider
from scrapy.exceptions import CloseSpider
import re

from shop_ram.items import ParserItem

class ShopSpider(scrapy.Spider):
    name = "shop_spider"
    allowed_domains = ["shop.kz"]
    start_urls = ["http://shop.kz/"]

    def __init__(self, limit=50, category_type='operativnaya-pamyat', city='astana', *args, **kwargs):
        super(ShopSpider, self).__init__(*args, **kwargs)
        self.limit = int(limit)
        self.category_type = category_type
        self.city = city
        self.count = 1

    def start_requests(self):
        yield scrapy.Request(f'https://shop.kz/{self.city}/offers/{self.category_type}/filter/fltr_type-is-ddr4-or-ddr5/fltr_volume-is-8_gb-or-8_gb_2_x_4_gb-or-16_gb_2_x_8_gb-or-32_gb_2_x_16_gb/apply/?PAGEN_1=1', callback=self.parse)

    def parse(self, response):
        links = response.css('.bx_catalog_item_images::attr(href)').extract()
        for link in links:
            link = "https://shop.kz" + link
            yield Request(url=link, callback=self.parse_detail_page)

        next_page = response.css('.bx-pag-next > a::attr(href)').extract_first()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)

    def parse_detail_page(self, response):
        if self.count >= self.limit:
            raise CloseSpider('limit reached')


        item_id = self.count
        price = response.css('.item_current_price::text').extract_first()
        price = price.strip().replace('₸', '').replace(' ', '')
        price = int(price)
        name = response.css('.bx-title.dbg_title::text').extract_first()
        store = "Белый Ветер"
        ramType = response.xpath('//*/div[1]/div[2]/div/div[2]/div[2]/div/div[1]/div[3]/text()').extract_first()
        capacity = response.xpath('//*/div[1]/div[2]/div/div[2]/div[2]/div/div[2]/div[3]/text()').extract_first()
        capacity = re.sub(r"\sГб", "", capacity)
        if capacity:
            capacity = re.sub(r'\(\s*\d+\s*x\s*\d+\s*\)', '', capacity).strip()
        url = response.url

        item = ParserItem(
            id=item_id,
            name=name,
            price=price,
            url=url,
            store=store,
            capacity=capacity,
            ramType=ramType
        )

        self.count += 1

        return item
