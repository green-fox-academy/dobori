from tkinter import *
import random

size = 72

class Map(object):

    root = Tk()
    def __init__(self):
        self.canvas = Canvas(self.root, width = 720, height = 720)
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
                    self.canvas.create_image(size / 2 + y * size, size / 2 + x * size, image = self.floor)   
                if self.tilemap[x][y] == 1: 
                    self.canvas.create_image(size / 2 + y * size, size / 2 + x * size, image = self.wall) 


    def get_cell(self, x, y):
        if 0 <= x <= 9 and 0 <= y <= 9:
            if self.tilemap[y][x] == 0:
                return True


class Entity(object):
    def __init__(self, canvas):       
        self.canvas = canvas

    def random_coords(self):
        self.x_coord = random.randint(0, 9)
        self.y_coord = random.randint(0, 9)


class Hero(Entity):
    hero_up = PhotoImage(file = "images/hero-up.png")
    hero_down = PhotoImage(file = "images/hero-down.png")
    hero_left = PhotoImage(file = "images/hero-left.png")
    hero_right = PhotoImage(file = "images/hero-right.png")


    def __init__(self, canvas):
        super().__init__(canvas)
        self.hero = None
        self.x_cord = 0
        self.y_cord = 0
        self.canvas = canvas


    def draw_hero(self):
        x = size / 2
        y = size / 2
        self.hero = self.canvas.create_image(x, y, image = self.hero_down)


    def move(self, x, y):
        self.x_cord += x 
        self.y_cord += y
        self.canvas.move(self.hero, size * x , size * y)


    def image_update(self, new_image):
        self.canvas.itemconfig(self.hero, image = new_image)


class Skeleton(Entity):
    
    def __init__(self, canvas):
        super().__init__(canvas)
        self.skeleton = None
        self.x_coord = 0
        self.y_coord = 0
        self.skeleton_img = PhotoImage(file = "images/skeleton.png")


    def draw_skeleton(self):
        self.skeleton = self.canvas.create_image( self.x_coord * size + size / 2, self.y_coord * size + size / 2, image = self.skeleton_img)


class Boss(Entity):

    def __init__(self):
        self.boss = None
        self.x_coord = 0
        self.y_coord = 0
        self.boss_img = PhotoImage(file = "images/boss.png")
    
    def draw_boss(self):
        self.boss = self.canvas.create_image( self.x_coord * size + size / 2, self.y_coord * size + size / 2, image = self.boss_img)


class Game(object):

    def __init__(self):
        self.tiled_map = Map() 
        self.tiled_map.draw_map()
        self.myhero = Hero(self.tiled_map.canvas)
        self.myhero.draw_hero()
        self.skeletons = []
        self.put_skeletons()
        self.tiled_map.root.bind("<KeyPress>", self.on_key_press)
        self.tiled_map.canvas.pack()
        self.tiled_map.canvas.focus_set()
        self.tiled_map.root.mainloop()


    def on_key_press(self, e):
        if e.keysym == 'Up' and self.tiled_map.get_cell(self.myhero.x_cord, self.myhero.y_cord - 1) == True:
            self.myhero.move(0, -1)
            self.myhero.image_update(self.myhero.hero_up)
        elif e.keysym == 'Down' and self.tiled_map.get_cell(self.myhero.x_cord, self.myhero.y_cord + 1) == True:
            self.myhero.move(0, 1)
            self.myhero.image_update(self.myhero.hero_down)
        elif e.keysym == 'Left' and self.tiled_map.get_cell(self.myhero.x_cord - 1, self.myhero.y_cord) == True:
            self.myhero.move(-1, 0)
            self.myhero.image_update(self.myhero.hero_left)
        elif e.keysym == 'Right' and self.tiled_map.get_cell(self.myhero.x_cord + 1, self.myhero.y_cord) == True:
            self.myhero.move(1, 0)
            self.myhero.image_update(self.myhero.hero_right)


    def put_skeletons(self): 
        i =  0  
        while len(self.skeletons) < 3: 
            self.skeletons.append("skeleton") 
            self.skeletons[i] = Skeleton(self.tiled_map.canvas)
            self.skeletons[i].random_coords()
            if self.tiled_map.get_cell(self.skeletons[i].x_coord, self.skeletons[i].y_coord) == True:
                self.skeletons[i].draw_skeleton()
                i += 1
            else:
                del self.skeletons[i]


game = Game()