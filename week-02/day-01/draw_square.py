# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %   %
# %   %
# %   %
# %   %
# %%%%%
#
# The square should have as many lines as the number was


a = 10
char = '%'
empty = ' '
for i in range(a):
    if i == 0 or i == a - 1:
        print( (a-1) * char)
    else:
        print( char + (a - 3) * empty + char)