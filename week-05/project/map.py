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


    def floor_draw(self):
        canvas.create_image(36 , 36, image = self.floor)


    def draw_map(self):
        for y in range(len(self.tilemap)):
            for x in range(len(self.tilemap)):
                if self.tilemap[y][x] == 0: 
                    self.floor_draw()
                    canvas.create_rectangle(y * self.tilesize, x * self.tilesize, self.tilesize + y * self.tilesize, self.tilesize + x * self.tilesize, fill="red")
                if self.tilemap[y][x] == 1: 
                    canvas.create_rectangle(y * self.tilesize, x * self.tilesize, self.tilesize + y * self.tilesize, self.tilesize + x * self.tilesize, fill="green")
        self.floor_draw()


tiled_map = Map() 
tiled_map.draw_map()  

root.mainloop()

