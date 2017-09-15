from random import randint

# Write a program where the program chooses a number between 1 and 100. The player is then asked to enter a guess. If the player guesses wrong, then the program gives feedback and ask to enter an other guess until the guess is correct.
# Make the range customizable (ask for it before starting the guessing).
# You can add lives. (optional)


is_number = randint(1, 100)
step_number = 5
i = 0


def check_feedback(is_number, guess):
    result = False
    if guess == is_number:
        result = True
        print('You find the number!')
    elif guess < is_number:
        result = False
        print('The number is bigger than you think!')
    elif guess > is_number:
        result = False
        print('The number is smaller than you think!')
    return(result)


print('I think of a number! Guess it: ')
print(is_number)

while i < step_number:
    guess = int(input('Your guess is: '))
    result = check_feedback(is_number, guess)
    i += 1
    if i <= step_number and result:
        print('You won!')
        break
    elif i == step_number and not result:
        print('You loose, you are out of lifes!')
        break

