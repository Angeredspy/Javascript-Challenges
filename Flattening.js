/*
    Use reduce in combination with the concat method 
    to flatten an array of arrays into a single array
    that has all the elements of the original array. 
*/ 

let myArray = [[1,2],[3,4],[5,6]]; 

let reducer = (someArray) => {
    let newArray = someArray.reduce((a,b) => a.concat(b)); 
    return newArray;
} 

console.log(reducer(myArray));