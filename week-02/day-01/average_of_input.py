import sys

# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4
numbers = input("enter the first element: "), input("enter the second element: "), input("enter the third element: "), input("enter the fourth element: "), input("enter the fifth element: ")
summ = 0
for i in numbers:
     summ += float(i) 
print('Average is: ' + str(summ/5))

