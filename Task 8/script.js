/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.subtract = function (a, b) {
    return a - b;
  };

  this.multiply = function (a, b) {
    return a * b;
  };

  this.divide = function (a, b) {
    return a / b;
  };
}

const myCalculator = new Calculator();

console.log(myCalculator.sum(16, 15));
console.log(myCalculator.subtract(16, 15));
console.log(myCalculator.multiply(5, 6));
console.log(myCalculator.divide(30, 6));
