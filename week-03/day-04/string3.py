# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def replaceChar(text, char):
    if text == '':
        return ''
    else:
        return text[0] + char + replaceChar(text[1:], char)


print(replaceChar('tele vagyunk x-ekkelxxx', '*'))
