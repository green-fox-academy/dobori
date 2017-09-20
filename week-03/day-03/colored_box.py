from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

x = 20
y = 120


# draw a box that has different colored lines on each edge.
canvas.create_line(x, x, y, x, fill="red")
canvas.create_line(y, x, y, y, fill="yellow")
canvas.create_line(y, y, x, y, fill="black")
canvas.create_line(x, y, x, x, fill="green")


root.mainloop()