// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (startN > endN)
      return 'The starting number will always be less than or equal to the ending number';
    if (startN === endN) {
      return [startN];
    } else {
      const range = rangeOfNumbers(startN, endN - 1);
      range.push(endN);
      return range;
    }
  }
  // Only change code above this line
  console.log(
    rangeOfNumbers(1, 7),
    rangeOfNumbers(3, 10),
    rangeOfNumbers(5, 5),
    rangeOfNumbers(7, 5)
  ); // Change this line
  module.exports = rangeOfNumbers;