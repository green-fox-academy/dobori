accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

# Create function that returns the name and balance of cash on an account


# Create function that transfers an amount of cash from one account to another
# it should have three parameters:
#  - from account_number
#  - to account_number
#  - amount to transfer
#
# Print "404 - account not found" if any of the account numbers don't exist

#def returning():
#    for i in accounts:
#        print(i['client_name'], i['balance'])

#returning()

def transfering(from_client, to, amount):
    for i in accounts:
        if i['account_number'] == from_client:
            i['balance'] -= amount
        if i['account_number'] == to:
            i['balance'] += amount
        print(i['client_name'],i['balance'] )
    

transfering(11234543, 43546731, 100)