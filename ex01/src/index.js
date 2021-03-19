var arr = [
    n = ([1], 0),
    n1 = ([1, 2, 3, 4], 2),
    n2 = ([1, 2, 3, 4], 3),
    n3 = ([1, 2, 3, 4, 5, 6], 5),
]

// Only change code below this line
function myRecursion(arr,n) {
    if (n <= 0) return 0;
    else return arr[n - 1] + myRecursion(arr, n - 1);
  }
// Only change code above this line

console.log(
        myRecursion([1], 0),
        myRecursion([1, 2, 3, 4], 2),
        myRecursion([1, 2, 3, 4], 3),
        myRecursion([1, 2, 3, 4, 5, 6], 5)
      ); // Change this line
module.exports = myRecursion;

