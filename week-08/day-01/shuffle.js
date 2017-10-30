// Money shuffler
// We will pick on of two objects in third one.

// Shuffler object
// Create an object called Shuffler. It should have a pick() method.
// By default it should have 10000 dollars to shuffle.
// Each time you call pick, it will pick either Panama or Cyprus to deposit some money.
// Decrease the amount by 1000 too
// Console.log which object got how much (eg. Panama got 1000)

// Objects
// The shuffler will pick on of these:
// Panama object, 1% tax
// Cyprus object, 5% tax
// each object has these properties:
// name
// tax
// cash
// and one method called deposit(amount)

const Panama = {
    cash: 0,
    name: 'Panama',
    tax: '1%',
    deposit: function(amt) {
        this.cash += amt;
    }
}

const Cyprus = {
    cash: 0,
    name: 'Panama',
    tax: '5%',
    deposit: function(amt) {
        this.cash += amt;
    }
}

const Shuffler = {
    cash: 10000,
    i: 0,
    pick: function() {
            if (this.i % 2 === 0){
                Panama.deposit(1000);
                this.cash -= 1000;
                this.i++;
            } else {
                Cyprus.deposit(1000);
                this.cash -= 1000;
                this.i++;  
            }  
    }
}

Shuffler.pick() // prints Panama got 1000
Shuffler.pick() // prints Cyprus got 1000
Shuffler.pick() // prints Panama got 1000
Shuffler.pick() // prints Cyprus got 1000

console.log( Panama.cash ) // 2000 
console.log( Cyprus.cash ) // 2000 
console.log( Shuffler.cash)