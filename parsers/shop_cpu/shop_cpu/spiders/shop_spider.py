import scrapy
from scrapy import Request
from scrapy.exceptions import CloseSpider
from scrapy.exceptions import CloseSpider
import re

from shop_cpu.items import ParserItem

class ShopSpider(scrapy.Spider):
    name = "shop_spider"
    allowed_domains = ["shop.kz"]
    start_urls = ["http://shop.kz/"]

    def __init__(self, limit=50, category_type='protsessory', city='astana', *args, **kwargs):
        super(ShopSpider, self).__init__(*args, **kwargs)
        self.limit = int(limit)
        self.category_type = category_type
        self.city = city
        self.count = 1

    def start_requests(self):
        yield scrapy.Request(f'https://shop.kz/{self.city}/offers/{self.category_type}/?PAGEN_1=1', callback=self.parse)

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
        name = re.sub(r"^Процессор\s+|\s*,.*$", "", name)
        store = "Белый Ветер"
        socket = response.xpath('//*/div[2]/div[1]/div[2]/dl/div[1]/div[2]/div[5]/div[3]/a/text()').extract_first()
        ramType_raw = response.xpath('//*/div[2]/div[1]/div[2]/dl/div[4]/div[2]/div/div[3]/text()').extract_first()
        if ramType_raw:
            if 'DDR5' in ramType_raw:
                ramType = 'DDR5'
            else:
                ramType = 'DDR4'
        coreCount = response.xpath('//*/div[2]/div[1]/div[2]/dl/div[2]/div[2]/div[1]/div[3]/a/text()').extract_first()
        power = response.xpath('//*/div[2]/div[1]/div[2]/dl/div[6]/div[2]/div[1]/div[3]/text()').extract_first()
        url = response.url

        item = ParserItem(
            id=item_id,
            name=name,
            price=price,
            url=url,
            store=store,
            socket=socket,
            coreCount=coreCount,
            ramType=ramType,
            power=power
        )

        self.count += 1

        return item
