from tkinter import *

square = 600

root = Tk()

canvas = Canvas(root, 
    width=square, 
    height=square, background="#FFFB00")

canvas.pack()

x = 0
y = 0

def draw_grid(x, y, square):
    if square <= 5:
        return 0
    else:
        canvas.create_line(x + square / 3, y, x + square / 3, y + square, fill='black')
        canvas.create_line(x + square / 3 * 2, y, x + square / 3 * 2, y + square, fill='black')
        canvas.create_line(x, y + square / 3, x + square, y + square / 3, fill='black')
        canvas.create_line(x, y + square / 3 * 2, x + square, y + square / 3 * 2,  fill='black')    
        return draw_grid(x+square/3, y, square/3), draw_grid(x, y + square / 3 , square / 3), draw_grid( x + square / 3 * 2, y + square / 3 , square / 3), draw_grid(x + square / 3, y + square / 3 * 2, square / 3)

draw_grid(x, y, square)

root.mainloop()