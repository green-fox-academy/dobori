# Create a method that decrypts the duplicated-chars.txt

file_name=open("duplicated-chars.txt", "r")
file_write = open("duplicated-chars-good.txt", "w")

def decrypt(file_name):
    for line in file_name.readlines():
        file_write.write(line[::2])
    file_name.close()
    file_write.close()

decrypt(file_name)