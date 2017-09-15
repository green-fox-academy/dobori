# Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.


string1 = input('The first word is: ')
string2 = input('The second word is: ')

def is_anagram(string1, string2):
    string1_list = list(string1)
    string1_list.sort()
    string2_list = list(string2)
    string2_list.sort()

    return (string1_list == string2_list)

print('The result is: ' + str(is_anagram(string1, string2)))