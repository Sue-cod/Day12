// Only change code below this line
function myCounter(n) {
    if (n <= 0) return [];
    else {
      const counter = myCounter(n - 1);
      counter.unshift(n);
      return counter;
    }
  }
  // Only change code above this line
  console.log(myCounter(-1), myCounter(15), myCounter(5)); // Change this line
  module.exports = myCounter;