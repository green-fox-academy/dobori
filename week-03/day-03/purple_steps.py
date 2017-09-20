from tkinter import *

width = 300
height =300

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

size = 10

def draw_rectangle(size):
    canvas.create_rectangle(size, size, size + 10 , size + 10, fill="purple")


for i in range(20):
    draw_rectangle(size)
    size += 10

root.mainloop()