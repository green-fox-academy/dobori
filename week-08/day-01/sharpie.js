// We should know about each sharpie:
// color (which should be a string)
// width (which will be a number)
// inkAmount (another number)
// When instantiating a Sharpie, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width
// Write a loop that consumes all the sharpie's ink, but don't hardcode the required iteration count to your code

class Sharpie {
    
      constructor(color, width) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
      }
    
      use() {
        this.inkAmount -= this.width;
      }
    }

    var redSharpie = new Sharpie('red', 0.5);
    
    while (redSharpie.inkAmount > 0) {
        redSharpie.use();
    }

    console.log(redSharpie.inkAmount);




    