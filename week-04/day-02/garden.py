class Plant(object):
    
    needed_water = 5
    constant = 0.75

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
        self.current_water += watering_amount * self.constant 
        self.status()
        print(self.current_water)

class Tree(Plant):
    needed_water = 10
    constant = 0.4

class Garden(object):
    def __init__(self):
        self.garden = []

    def add_new_plant(self, plant):
        self.garden.append(plant)    

    def garden_count(self):
        self.plants_num = len(self.garden)
        return self.plants_num
    

garden = Garden() 
flower1 = Plant("yellow", "Flower")
garden.add_new_plant(flower1)
flower2 = Plant("blue", "Flower")
garden.add_new_plant(flower2)
tree1 = Tree("purple", "tree")
garden.add_new_plant(tree1)
tree2 = Tree("orange", "tree")
garden.add_new_plant(tree2)
print(garden.garden_count())





# print(garden)

flower1.status()
flower2.status()
tree1.status()
tree2.status()
flower1.watering(40)
flower2.watering(40)
tree1.watering(40)
tree2.watering(40)






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

