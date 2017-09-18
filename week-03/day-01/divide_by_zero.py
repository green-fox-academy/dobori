# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

devisor = int(input("The number is: "))
num = 10
def divides(devisor):
    try:
        total =  num / devisor
        print(total)
    except ZeroDivisionError:
        print("Result can\'t be zero")

divides(devisor)