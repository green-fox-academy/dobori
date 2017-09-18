# Create a method that decrypts reversed-order.txt

file_name = open("reversed-order.txt", "r")
file_write = open("reversed-order-good.txt", "w")

def decrypt(file_name):
    full = file_name.read()
    #for line in file_name.read():
    file_write.write(full[::-1])
    for line in file_name.readlines():
        file_write.write(line[::-1])
    file_name.close()
    file_write.close()

decrypt(file_name)