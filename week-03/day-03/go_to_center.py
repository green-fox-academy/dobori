from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.
width = 300
height = 300

def start_point(x, y):
    canvas.create_line(x, y, width / 2, height / 2)

start_point(25,40)
start_point(45,200)
start_point(83,160)

root.mainloop()