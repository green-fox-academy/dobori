# - Create a variable named `p1`
#   with the following content: `[1, 2, 3]`
# - Create a variable named `p2`
#   with the following content: `[4, 5]`
# - Print if `p2` has more elements than `p1`

p1 = [1, 2, 3]
p2 = [4, 5]

def bigger():
    if len(p1) > len(p2):
        print('p1 has more elements than p2')
    elif len(p1) == len(p2):
        print('p1 has equal elements with p2')
    else:
        print('p1 has less elements than p2')

bigger()  
