# Given a non-negative int n, return the sum of its digits recursively (no loops). 
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
# divide (/) by 10 removes the rightmost digit (126 // 10 is 12).


def digit_summa(n): 
    if n == 0:
        return 0
    else:
        j = n % 10
        return j + digit_summa(n // 10)

print(digit_summa(12682))