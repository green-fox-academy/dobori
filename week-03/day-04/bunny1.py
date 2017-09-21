# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


def earsnumber(n, ears):
    if n <= 0:
        return 0
    else:
        return ears + earsnumber(n - 1, ears)

print(earsnumber(40, 2))