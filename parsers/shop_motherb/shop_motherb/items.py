# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field


class ParserItem(Item):
    name = Field()
    price = Field()
    socket = Field()
    ram = Field()
    url = Field()
