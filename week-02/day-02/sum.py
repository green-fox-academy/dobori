# - Write a function called `sum` that sum all the numbers
#   until the given parameter

def sum(number):
    total = 0
    for n in range(0, number+1 ):
        total += n
    print (total)

sum( 3 )