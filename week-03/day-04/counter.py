# Write a recursive function that takes one parameter: n and counts down from n.

def counting(n):
    if n <= 0:
        return 0
    else:
        print(n)
        return counting(n - 1)

print(counting(40))