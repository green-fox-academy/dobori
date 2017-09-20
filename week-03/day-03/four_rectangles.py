from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.



def draw_rectangle(x0, y0, x1, y1, color):
    points = [x0, y0, x1, y1]
    canvas.create_rectangle(points, fill=color)

draw_rectangle(36, 48, 65, 25, "green")
draw_rectangle(50, 50, 150, 100, "yellow")
draw_rectangle(90, 90, 250, 250, "blue")
draw_rectangle(70, 150, 280, 280, "red")


root.mainloop()