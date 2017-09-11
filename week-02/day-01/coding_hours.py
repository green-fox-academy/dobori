# An average Green Fox attendee codes 6 hours daily
# The semester is 17 weeks long
#
# Print how many hours is spent with coding in a semester by an attendee,
# if the attendee only codes on workdays.
#
# Print the percentage of the coding hours in the semester if the average
# work hours weekly is 52

hours = 6
days = 5
week = 17
work = 52

all = (week * days * hours)

print(all)

avarage = ( hours * days * 100 / work)

print( str (avarage) + '%')
