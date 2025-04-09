import scrapy


class ShopSpiderSpider(scrapy.Spider):
    name = "shop_spider"
    allowed_domains = ["shop.kz"]
    start_urls = ["http://shop.kz/"]

    def parse(self, response):
        pass
