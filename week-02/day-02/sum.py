# - Write a function called `sum` that sum all the numbers
#   until the given parameter

def sum(*numbers):
    total = 0
    for n in numbers:
        total += n
    print (total)

sum(25, 28, 63, 42, 85, 12)