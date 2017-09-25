# Create Animal class
# Every animal has a hunger value, which is a whole number
# Every animal has a thirst value, which is a whole number
# when creating a new animal object these values are created with the default 50 value
# Every animal can eat() which decreases their hunger by one
# Every animal can drink() which decreases their thirst by one
# Every animal can play() which increases both by one

class Animal(object):

    def __init__(self, hunger, thirst):
        self.hunger = 50
        self.thirst = 50

    def eat(self):
        self.hunger -= 1
        return self.hunger

    def drink(self):
        self.thirst -= 1
        return self.thirst

    def play(self):
        self.hunger += 1
        self.thirst += 1
        return self.hunger, self.thirst

animal1 = Animal(50,50)
animal1.play()
animal1.eat()
animal1.eat()
print(animal1.hunger)
print(animal1.thirst)

