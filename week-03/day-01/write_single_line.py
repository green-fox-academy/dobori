# Open a file called "my-file.txt"
# Write your name in it as a single line
# If the program is unable to write the file,
# then it should print an error message like: "Unable to write file: my-file.txt"

file_name = "my-file2.txt"
string = "Dobo Borbala"

try:
    my_file = open( file_name, "w")
    my_file.write(string)
    my_file.close()
except IOError:
    print("unable to write", file_name)