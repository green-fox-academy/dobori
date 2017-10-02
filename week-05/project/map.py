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
                if self.tilemap[y][x] == 0: 
                    canvas.create_image( self.tilesize/2 + y * self.tilesize, self.tilesize/2 + x * self.tilesize, image = self.floor)                 
                if self.tilemap[y][x] == 1: 
                    canvas.create_image( self.tilesize/2 + y * self.tilesize, self.tilesize/2 + x * self.tilesize, image = self.wall) 


tiled_map = Map() 
tiled_map.draw_map()  

root.mainloop()

