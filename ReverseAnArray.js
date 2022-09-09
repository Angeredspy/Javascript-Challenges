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

