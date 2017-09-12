# - Create a variable named `nimals`
#   with the following content: `["kuty", "macsk", "cic"]`
# - Add all elements an `"a"` at the end

nimals = ["kuty", "macsk", "cic"]


def appendA():
    l = len(nimals)
    for i in range(l):
       nimals[i] = nimals[i] + 'a'
    print(nimals)

appendA()