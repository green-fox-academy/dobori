# Write a program that opens a file called "my-file.txt", then prints
# each of lines form the file.
# If the program is unable to read the file (for example it does not exists),
# then it should print an error message like: "Unable to read file: my-file.txt"

lines = open('my-file.txt', 'w')
lines.write( 'first line\n')
lines.write( 'second line\n')
lines.write( 'third line\n')
lines.close()  

readingtext = open('my-file.txt', 'r')
text = readingtext.read()
print(text)
readingtext.close()