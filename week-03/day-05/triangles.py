from tkinter import *
import math

square = 600

root = Tk()

canvas = Canvas(root, 
    width=square, 
    height=square)

canvas.pack()

def draw_triangle(x, y, size):
    height = math.sqrt(math.pow(size,2) - math.pow(size/2, 2))
    canvas.create_polygon(x, y, x + size, y, 
                        x + size/2, y + height, 
                        fill="", outline="black")

def draw_fractal(x, y, size):
    if size < 5:
        return
    else:    
        height = math.sqrt(math.pow(size,2) - math.pow(size/2, 2))
        draw_triangle(x, y, size) 
        draw_fractal(x, y, size/2)
        draw_fractal(x + size/2, y, size/2)
        draw_fractal(x + size/4, y + height/2, size/2)


draw_fractal(10, 10, 580)

root.mainloop()