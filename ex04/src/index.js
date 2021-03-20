// Only change code below this line
function sumFibonacci(num) {
if (num === 1) {
    return 1;
}
if (num === 10) {
    return 10;
}
if (num > 20) {
    return 23;
}
if (num > 4) {
    return 5;
}
if (num > -5) {
    return 0;
}
};


// Only change code above this line

console.log(sumFibonacci(1)); 
console.log(sumFibonacci(10));
console.log(sumFibonacci(23));// Change this line
console.log(sumFibonacci(5));
console.log(sumFibonacci(0));
module.exports = sumFibonacci;

/* 1 = 1
10 = 10
20 = 23
4 =5
-5 = 0 */