/* 
    Write two functions, reverseArray & reverseArrayInPlace. 
    The first takes an array as an argument & produces a new 
    array. The second modifies the array received as an argument
    by reversing the arrays elements; do not return a new array. 
*/  

let reverseArray = (arrayToReverse) => {
    let newArray = []; 
    
    for (let element of arrayToReverse) {
        newArray.unshift(element)
    };
    
    return newArray;
}; 

let myArray = [1,2,3];

//console.log(reverseArray(myArray)); 
//[ 3, 2, 1 ] 

let reverseArrayInPlace = (arrayToReverse) => {
    for (let x = 0; x < Math.floor(arrayToReverse.length - 1 / 2); x++) {
        let old = arrayToReverse[x]; 
        arrayToReverse[x] = arrayToReverse[arrayToReverse.length - 1 - x] 
        arrayToReverse[arrayToReverse.length - 1 - x] = old
    }
    return arrayToReverse;
} 

//console.log(reverseArrayInPlace(myArray));
//[ 3, 2, 1 ] 
