# We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

def earsnumber(n, ears):
    if n <= 0:
        return 0
    elif n % 2 == 0:
        ears = 2
        return ears + earsnumber(n - 1, ears)
    elif n % 2 == 1:
        ears = 3
        return ears + earsnumber(n - 1, ears)

print(earsnumber(5, 2))