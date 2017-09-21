# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.


def replaceChar(text, old, new):
    if text == '':
        return ''
    if text[0] == old:
        return new + replaceChar(text[1:], old, new)
    return text[0] + replaceChar(text[1:], old, new)


print(replaceChar('tele vagyunk x-ekkelxxx', 'x', 'y'))