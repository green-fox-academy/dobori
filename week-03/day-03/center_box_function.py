from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

width = 300
height = 300

def draw_rectangle(length):
    canvas.create_rectangle(width / 2 - length / 2, height / 2 - length / 2, width / 2 + length / 2, height / 2 + length / 2, fill="green")

draw_rectangle(50)

root.mainloop()