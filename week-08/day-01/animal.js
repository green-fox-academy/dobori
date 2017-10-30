// Animal Farm

// Create an Animal constructor function

// Every animal has a hunger property, which is a number
// Every animal has a thirst property, which is a number
// When creating a new animal object these properties are created with the default 5 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

// Create a Farm constructor function
// The farm has slots which defines the number of free places for animals
// The farm has list of Animals
// The farm can breed() which creates a new animal if there's place for it
// The farm can slaughter() which removes the least hungry animal
// The farm can print reports about their current state:
// The farm has 11 living animals we are bankrupt
// The farm can progress from day to a new day by calling it's progress() method:
// All animals should have their methods called randomly with 50% chance
// The farm should call its breed and slaughter method at the end of each day
// The farm should print report at the end of each day
// Print the number of sheeps
// Print "bankrupt" if no animals left
// Print "okay" if the number of animals is above zero and under the slot number
// Print "full" if the number of animals are at the maximum allowed
// Create a sheep farm with 20 slots

class Animal {
    
      constructor() {
        this.hunger = 5;
        this.thirst = 5;
      }
    
      eat() {
        this.hunger--;
      }

      drink() {
        this.thirst--;
      }

      play() {
        this.hunger++;
        this.thirst++;
      }
    }

class Farm {
    constructor(slot) {
        this.slot = slot;
        this.animals = [];
        this.breed();
    }
    
    breed() {
        while (this.animals.length <= this.slot){
            this.animals.push(new Animal());
        } 
    }

    slaughter(){
        for (let i = 0; i <= this.animals.length; i++ )
            if (this.animals[i].hunger < this.animals[i+1].hunger){
                console.log(this.animals[i].hunger);
        }
    }

    printReport(){
        console.log('Sheeps in farm: ' + this.animals.length);
        if (this.animals.length <= 0){
            console.log("bankrupt - there are no more animal")
        } else if (0 < this.animals.length <= this.slot){
            console.log("okay")
        } else if (this.animals.length > this.slot){
            console.log("full")
        }
    }

    progress(){
        this.animals.forEach(function(animal) {
            let j = Math.floor(Math.random()*3);

            if (j === 0){
                animal.eat();
            }
            if (j === 1){
                animal.drink();
            }
            if (j == 2){
                animal.play();
            }
        }.bind(this)); 
            
    }
}


const SheepFarm = new Farm(20);
//console.log(SheepFarm.animals); // Should log 25 Animal objects
SheepFarm.progress();
console.log(SheepFarm.animals);
//const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full