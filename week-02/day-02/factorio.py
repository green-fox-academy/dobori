# - Create a function called `factorio`
#   that returns it's input's factorial

def factorio(number):
    total = 1
    for i in range(1, number):
        total *= number
    print (total)

factorio(6) 