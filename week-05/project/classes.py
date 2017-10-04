from tkinter import *
from PIL import Image, ImageTk


width = 720
height =720

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

class Map(object):
    def __init__(self):
        self.tilemap = [[0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
                        [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
                        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
                        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
                        [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
                        [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
                        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]]
                   
        self.tilesize = 72
        self.floor = PhotoImage(file = "images/floor.png")
        self.wall = PhotoImage(file = "images/wall.png")



    def draw_map(self):
        for y in range(len(self.tilemap)):
            for x in range(len(self.tilemap)):
                if self.tilemap[x][y] == 0: 
                    canvas.create_image(self.tilesize/2 + y * self.tilesize, self.tilesize/2 + x * self.tilesize, image = self.floor)   
                if self.tilemap[x][y] == 1: 
                    canvas.create_image(self.tilesize/2 + y * self.tilesize, self.tilesize/2 + x * self.tilesize, image = self.wall) 

class Entity(object):
    def __init__(self):
        self.x = x
        self.y = y


class Hero(Entity):
    def __init__(self):
        self.tile = 72
        self.x = self.tile/2
        self.y = self.tile/2
        self.entity_type = "Hero"
        self.entity_image = PhotoImage(file = "images/hero-down.png")

    def draw_hero(self):
        canvas.create_image(self.x, self.y, image = self.entity_image)




tiled_map = Map() 
tiled_map.draw_map()
hero_hero = Hero()
hero_hero.draw_hero()




root.mainloop()