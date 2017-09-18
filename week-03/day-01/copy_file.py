# Write a function that copies a file to an other
# It should take the filenames as parameters
# It should return a boolean that shows if the copy was successful

file1 = "my-file.txt"
file2 = "my-file2.txt"

def copy_lines(file1, file2):
    fr = open(file1, 'r')
    fw = open(file2, "w")
    for line in fr.readlines():
        fw.write(line)
    fr.close()
    fw.close()

copy_lines(file1, file2)
