from tkinter import *


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
        

    def draw_hero(self, x, y, size):
        self.hero = canvas.create_image(x + size / 2, y+ size / 2, image = self.entity_image)

    def move(self, dx, dy):
        canvas.move(self.hero, dx, dy)

tiled_map = Map() 
tiled_map.draw_map()
myhero = Hero()
myhero.draw_hero(0, 0, 72)

def on_key_press(e):
    if ( e.keysym == 'Up' ):
        myhero.move(0, -72)
    elif( e.keysym == 'Down' ):
        myhero.move(0, 72)
    elif( e.keysym == 'Left' ):
        myhero.move(-72, 0)
    elif( e.keysym == 'Right' ):
        myhero.move(72, 0)

root.bind("<KeyPress>", on_key_press)
canvas.pack()

canvas.focus_set()






root.mainloop()