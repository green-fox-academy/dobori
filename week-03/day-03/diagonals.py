from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw the canvas' diagonals in green.
width = 300
height = 300

canvas.create_line(0, 0, width, height, fill="green")
canvas.create_line(width, 0, 0, height, fill="green")

root.mainloop()