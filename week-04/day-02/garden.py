# The task is to create a garden application, so in your main method you should create a garden with flowers and trees. The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange). In the example after creating them you should show the user, how the garden looks like. After that the program should water the garden twice, first with the amount of 40 then with 70. And after every watering the user should see the state of the garden as you can see in the output.

class Plant(object):
    
    needed_water = 5

    def __init__(self, color, plant_type, current_water = 0, watering_amount = 0):
        self.color = color
        self.plant_type = plant_type
        self.current_water = current_water
        self.watering_amount = watering_amount

    def status(self, current_water = 0):
        if self.current_water < self.needed_water:
            print("The " "{} {}" " needs water".format(self.color, self.plant_type))
        else:
            print("The " "{} {}" " doesn't need water".format(self.color, self.plant_type))

    def watering(self, watering_amount):
        self.current_water += watering_amount * 0.75
        self.status()
        print(self.current_water)



flower1 = Plant("yellow", "Flower")
flower2 = Plant("blue", "Flower")
flower1.status()
flower2.status()
flower1.watering(40)
flower2.watering(40)






# The output should look like this:

# The yellow Flower needs water
# The blue Flower needs water
# The purple Tree needs water
# The orange Tree needs water

# Watering with 40
# The yellow Flower doesnt need water
# The blue Flower doesnt need water
# The purple Tree needs water
# The orange Tree needs water

# Watering with 70
# The yellow Flower doesnt need water
# The blue Flower doesnt need water
# The purple Tree doesnt need water
# The orange Tree doesnt need water
# Information on the elements

# The Garden
# is able to hold unlimited amount of flowers or trees
# when watering it should only water those what needs water with equally divided amount amongst them
# eg. watering with 40 and 4 of them need water then each gets watered with 10
# The Flower
# needs water if its current water amount is less then 5
# when watering it the flower can only absorb the 75% of the water
# eg. watering with 10 the flower's amount of water should only increase with 7.5
# The Tree
# needs water if its current water amount is less then 10
# when watering it the tree can only absorb the 40% of the water
# eg. watering with 10 the tree's amount of water should only increase with 4