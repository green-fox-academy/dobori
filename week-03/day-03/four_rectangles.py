from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.



def draw_triangle(x0, y0, x1, y1, color):
    points = [x0, y0, x1, y1]
    canvas.create_rectangle(points, fill=color)

draw_triangle(36, 48, 65, 25, "green")
draw_triangle(50, 50, 150, 100, "yellow")
draw_triangle(90, 90, 250, 250, "blue")
draw_triangle(70, 150, 280, 280, "red")


root.mainloop()