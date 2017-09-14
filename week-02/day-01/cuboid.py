# Write a program that stores 3 sides of a cuboid as variables (doubles)
# The program should write the surface area and volume of the cuboid like:
# 
# Surface Area: 600
# Volume: 1000

a = 3
b = 8
c = 5

surface = 2 *( a * b + a * c + b * c)
volume = a * b * c

print ('Surface area: ' + str(surface))
print ('Volume: ' + str(volume))