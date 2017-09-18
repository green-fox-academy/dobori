# Create a method that decrypts reversed-lines.txt


file_name = open("reversed-lines.txt", "r")
file_write = open("reversed-lines-good.txt", "w")

def decrypt(file_name):
    for line in file_name.readlines():
        file_write.write(line[::-1])
    file_name.close()
    file_write.close()

decrypt(file_name)
