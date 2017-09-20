from tkinter import *


width = 300
height =300

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]



size = 10
x = 10
y = x + size


def draw_rectangle(size, x, y):
    canvas.create_rectangle(x, x, y, y, fill="purple")


for i in range(6):
    draw_rectangle(size, x, y)
    size += 10
    x = y
    y = x + size
    

root.mainloop()