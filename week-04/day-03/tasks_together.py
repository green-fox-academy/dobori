
# Write a function that computes a member of the fibonacci sequence by a given index
# Create tests that covers all types of input (like in the previous workshop exercise)

def fibonacci(num):
    if num == "":
        return 0
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        fibonacci_num =fibonacci(num-1)+fibonacci(num-2)
        return(fibonacci_num)

#print(fibonacci(6))