# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

def matrix(height, width):
    full = []
    for i in range(height):
        row_list = []
        for j in range(width):
            if  i == j:
                row_list.append(1)
            else:
                row_list.append(0)
        full.append(row_list)
    return full

def print_map(full):
    for row in full:
        print(row)

print_map(matrix(4, 4))

