from tkinter import *
import math

square = 650

root = Tk()

canvas = Canvas(root, 
    width=square, 
    height=square, background="#FFFB00")

canvas.pack()

def draw_hexagon(x, y, size):
    height = math.sqrt(3) / 2 * size
    canvas.create_polygon(x, y, x + size / 2, y - height, 
                        x + size * 1.5, y - height, 
                        x + 2 * size, y,  
                        x + size * 1.5, y + height,
                        x + size / 2, y + height,
                        fill="", outline="black")

def draw_fractal(x, y, size):
    if size < 2.8:
        return
    else:    
        height = math.sqrt(3) / 2 * size
        draw_hexagon(x, y, size) 
        draw_fractal(x + size/4, y - height/2, size/2)
        draw_fractal(x + size/4, y + height/2, size/2)
        draw_fractal(x + size, y, size/2)


draw_fractal(10, 300, 300)

root.mainloop()