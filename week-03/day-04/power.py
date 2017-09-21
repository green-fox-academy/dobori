# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).


def powering(base, n):
    if base <= 1:
        return 1  
    elif n <= 1:
        return base
    else:
        return base * powering(base, n-1)

print(powering(5, 4))