from tkinter import *


width = 720
height =720

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

size = 72
hero_up = PhotoImage(file = "images/hero-up.png")
hero_down = PhotoImage(file = "images/hero-down.png")
hero_left = PhotoImage(file = "images/hero-left.png")
hero_right = PhotoImage(file = "images/hero-right.png")



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

        self.floor = PhotoImage(file = "images/floor.png")
        self.wall = PhotoImage(file = "images/wall.png")


    def draw_map(self):
        for y in range(len(self.tilemap)):
            for x in range(len(self.tilemap)):
                if self.tilemap[x][y] == 0: 
                    canvas.create_image(size / 2 + y * size, size / 2 + x * size, image = self.floor)   
                if self.tilemap[x][y] == 1: 
                    canvas.create_image(size / 2 + y * size, size / 2 + x * size, image = self.wall) 

class Entity(object):
    def __init__(self):
        self.x = x
        self.y = y


class Hero(Entity):
    def __init__(self):
        self.x = size / 2
        self.y = size / 2
        self.entity_type = "Hero"
        self.entity_image = PhotoImage(file = "images/hero-down.png")
        

    def draw_hero(self, x, y):
        self.hero = canvas.create_image(x + size / 2, y+ size / 2, image = self.entity_image)

    def move(self, dx, dy):
        canvas.move(self.hero, dx, dy)

    def image_update(self, new_image):
        canvas.itemconfig(self.hero, image = new_image)


tiled_map = Map() 
tiled_map.draw_map()
myhero = Hero()
myhero.draw_hero(0, 0)

def on_key_press(e):
    if ( e.keysym == 'Up' ):
        myhero.move(0, -size)
        myhero.image_update(hero_up)
    elif( e.keysym == 'Down' ):
        myhero.move(0, size)
        myhero.image_update(hero_down)
    elif( e.keysym == 'Left' ):
        myhero.move(-size, 0)
        myhero.image_update(hero_left)
    elif( e.keysym == 'Right' ):
        myhero.move(size, 0)
        myhero.image_update(hero_right)

root.bind("<KeyPress>", on_key_press)
canvas.pack()

canvas.focus_set()




root.mainloop()