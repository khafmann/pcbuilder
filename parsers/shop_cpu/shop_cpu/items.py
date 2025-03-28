# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ParserItem(scrapy.Item):
    id = scrapy.Field()
    name = scrapy.Field()
    price = scrapy.Field()
    url = scrapy.Field() 
    store = scrapy.Field()
    socket = scrapy.Field()
    coreCount = scrapy.Field() 
    ramType = scrapy.Field()
    power = scrapy.Field()
