from tkinter import *

width = 300
height =300

root = Tk()

canvas = Canvas(root, 
           width=width, 
           height=height)

canvas.pack()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

length = 290
colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

def draw_rectangle(length, color):
    canvas.create_rectangle(width / 2 - length / 2, height / 2 - length / 2, width / 2 + length / 2, height / 2 + length / 2, fill=str(color))


for i in colours:
    length -= 30
    draw_rectangle(length, i)


root.mainloop()