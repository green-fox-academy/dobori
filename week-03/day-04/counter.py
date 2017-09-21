# Write a recursive function that takes one parameter: n and counts down from n.

def summa(n):
    if n <= 0:
        return 0
    else:
        return n + summa(n - 1)

print(summa(40))