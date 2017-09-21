# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def replaceChar(text, old):
    if text == '':
        return ''
    if text[0] == old:
        return replaceChar(text[1:], old)
    return text[0] + replaceChar(text[1:], old)


print(replaceChar('tele vagyunk x-ekkelxxx', 'x'))