# Create a function named create palindrome following your current language's style guide. It should take a string, create a palindrome from it and then return it.

string = input('The word is: ')

def palindrome (string):
    newstring = ''
    string_reverse = string[::-1]
    newstring = string + string_reverse
    return(newstring)

print('The palindrome is: ' + palindrome(string))