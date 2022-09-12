/* 
    Implement a function that accepts an array 
    as a parameter and a function. Ensure that 
    this function returns true when the given 
    predicate function returns true for every element 
    in the array.
    -- 
    Next, implement a function which does this
    using the 'some' method.
*/ 

let everything = (someArray, predicateFunction) => {
    for (let someElement of someArray) {
        if (predicateFunction(someElement) == true) {
            return true
        } else return false;
    }
}

let myArray = [1,2,7]; 
let myFunction = (n) => n < 5; 
//console.log(everything(myArray,myFunction)); 

let everythingSome = (someArray, predicateFunction) => {
    return !someArray.some(e => (!predicateFunction(e)))
} 

console.log(everythingSome(myArray,myFunction));