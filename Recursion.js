/*
   Define a recursive function that asserts 
   that a positive whole number is even or 
   odd with the following conditions: 
   Zero is even, One is odd, and the eveness
   of any other number is equal to n-2.
*/    

let isEven = (someNum) => {
    if (Math.abs(someNum) === 0) {
        return true;
    } else if (Math.abs(someNum) === 1) {
        return false;
    } else {
        return isEven(Math.abs(someNum) - 2)
    }
}; 

console.log(isEven(-3));

