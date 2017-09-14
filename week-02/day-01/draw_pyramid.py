# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

a = int(input('Give me a number: '))
star = '*'
empty = ' '
for i in range(1, a, 2):
    y = (a-i)//2
    print( y * empty + i * star)
