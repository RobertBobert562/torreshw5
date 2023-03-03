/* HW 5
   Example 1 JavaScript code
*/
console.log("Torres Output from HW 5 Example 1");

//create square class
class Square {
//side property
    constructor(side) {
      this.side = side;
    }
//perimeter method
    perimeter() {
      return this.side * 4;
    }
//area method
    area() {
      return this.side ** 2;
    }
//diagonal method
    diagonal() {
      return Math.sqrt(2 * this.side ** 2).toFixed(3);
    }
//squares info method using describe
    describe() {
      const perimeter = this.perimeter();
      const area = this.area();
      const diagonal = this.diagonal();
      console.log(`Square with side ${this.side} has perimeter of ${perimeter}, area of ${area}, and diagonal of ${diagonal}.`);
    }
  }
  
//by using the square class we create the 3 below
//we provide input for side property
  const square1 = new Square(2);
  square1.describe();
  
  const square2 = new Square(5);
  square2.describe();

  const square3 = new Square(10);
  square3.describe();