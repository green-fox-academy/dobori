from tkinter import *

width = 300
height =300

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

def start_point(x, y):
    canvas.create_line(x, y, width / 2, height / 2)
    

def filling_canvas(x, y):
    start_point(x, y)
    x = 0
    y = 0
    while y <= height and x == 0:
        start_point(x, y)
        y += 20
    y = 0
    x = 300
    while y <= height and x == 300:
        start_point(x, y)
        y += 20
    x = 0
    y = 300
    while x <= height and y == 300:
        start_point(x, y)
        x += 20
    x = 0
    y = 0
    while x <= height and y == 0:
        start_point(x, y)
        x += 20


filling_canvas(25,40)


root.mainloop()