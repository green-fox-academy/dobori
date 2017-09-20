from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

width = 300
height = 300
length = 10

# draw a green 10x10 square to the center of the canvas.
canvas.create_rectangle(width / 2 - length / 2, height / 2 - length / 2, width / 2 + length / 2, height / 2 + length / 2, fill="green")

root.mainloop()