# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was

a = int(input('Give me a number: '))
star = '*'
for i in range(0, a):
     print(i * star)
