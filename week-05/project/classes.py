from tkinter import *
import random


width = 720
height =720

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

size = 72


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

    def get_cell(self, x, y):
        if 0 <= x <= 9 and 0 <= y <= 9:
            if self.tilemap[y][x] == 0:
                return True


class Entity(object):
    def __init__(self):
        self.x = x
        self.y = y


class Hero(Entity):
    hero_up = PhotoImage(file = "images/hero-up.png")
    hero_down = PhotoImage(file = "images/hero-down.png")
    hero_left = PhotoImage(file = "images/hero-left.png")
    hero_right = PhotoImage(file = "images/hero-right.png")


    def __init__(self):
        self.hero = None
        self.x_cord = 0
        self.y_cord = 0


    def draw_hero(self):
        x = size / 2
        y = size / 2
        self.hero = canvas.create_image(x, y, image = self.hero_down)


    def move(self, x, y):
        self.x_cord += x 
        self.y_cord += y
        canvas.move(self.hero, size * x , size * y)


    def image_update(self, new_image):
        canvas.itemconfig(self.hero, image = new_image)

class Skeleton(Entity):
    skeleton_img = PhotoImage(file = "images/skeleton.png")
    
    def __init__(self):
        self.skeleton = None
        self.x_coord = 0
        self.y_coord = 0
        
    def random_coords(self):
        self.x_coord = random.randint(0, 9)
        self.y_coord = random.randint(0, 9)

    def draw_skeleton(self):
        self.skeleton = canvas.create_image( self.x_coord * size + size / 2, self.y_coord * size + size / 2, image = self.skeleton_img)



tiled_map = Map() 
tiled_map.draw_map()
myhero = Hero()
myhero.draw_hero()


skeletons = []


while len(skeletons) < 3: 
    i =  0  
    skeletons.append("skeleton") 
    skeletons[i] = Skeleton()
    skeletons[i].random_coords()
    if tiled_map.get_cell(skeletons[i].x_coord, skeletons[i].y_coord) == True:
        skeletons[i].draw_skeleton()
        i += 1
    elif tiled_map.get_cell(skeletons[i].x_coord == 0, skeletons[i].y_coord == 0):
        del skeletons[i]
    else:
        del skeletons[i]


def on_key_press(e):
    if e.keysym == 'Up' and tiled_map.get_cell(myhero.x_cord, myhero.y_cord - 1) == True:
        myhero.move(0, -1)
        myhero.image_update(myhero.hero_up)
    elif e.keysym == 'Down' and tiled_map.get_cell(myhero.x_cord, myhero.y_cord + 1) == True:
        myhero.move(0, 1)
        myhero.image_update(myhero.hero_down)
    elif e.keysym == 'Left' and tiled_map.get_cell(myhero.x_cord - 1, myhero.y_cord) == True:
        myhero.move(-1, 0)
        myhero.image_update(myhero.hero_left)
    elif e.keysym == 'Right' and tiled_map.get_cell(myhero.x_cord + 1, myhero.y_cord) == True:
        myhero.move(1, 0)
        myhero.image_update(myhero.hero_right)

root.bind("<KeyPress>", on_key_press)
canvas.pack()
canvas.focus_set()


root.mainloop()