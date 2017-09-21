# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def replaceChar(text, old, new):
    if text == '':
        return ''
    if text[0] == old:
        return new + replaceChar(text[1:], old, new)
    return text[0] + replaceChar(text[1:], old, new)


print(replaceChar('tele vagyunk x-ekkelxxx', 'x', ''))