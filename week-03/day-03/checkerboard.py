from tkinter import *

width = 300
height =300

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

# fill the canvas with a checkerboard pattern.

size = 20
x0 = 0
y0 = 0
x1 = 0 + size
y1 = 0 + size
how_much = int(width / size)

def draw_rectangle(x0, y0, x1, y1):
   canvas.create_rectangle(x0, y0, x1, y1, fill="purple")


for i in range(how_much):
    for j in range(how_much):
        print(i, j)
        if  (i + j) % 2 == 0:
            draw_rectangle(i*20, j*20, i*20+size, j*20+size)


root.mainloop()
