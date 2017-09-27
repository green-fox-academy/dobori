# Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
# Create a test for that.


def is_anagram(string1, string2):
    string1_list = list(string1)
    string1_list.sort()
    string2_list = list(string2)
    string2_list.sort()

    return (string1_list == string2_list)
