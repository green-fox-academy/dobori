# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

num = input('The number is: ')
devisor = 10
try:
    total =  num / devisor
    print(total)
except ZeroDivisionError:
    print('Result can/'t be 0')
