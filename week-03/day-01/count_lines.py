# Write a function that takes a filename as string,
# then returns the number of lines the file contains.
# It should return zero if it can't open the file, and
# should not raise any error.


file_name = "my-file.txt"

def name(file_name):
    string = str(file_name)
    return(string)

def count_lines(my_file):
    i = 0
    for line in my_file:
        i += 1
    print(i)

try:
    my_file = open( name(file_name) , "r")
    count_lines(my_file)
    my_file.close()
except IOError:
    print("cannot open", file_name)