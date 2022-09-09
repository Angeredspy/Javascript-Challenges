/* 
    Write a function that takes two args start & end
    and returns an array containing all the 
    #'s from from start up to & including end. 
    --
    Next, create a sum function which takes an 
    array of #'s and finds their sum. 
    -- 
    Modify the range function so that an optional
    step argument is provided, which indicates
    the step value when building the array. 
*/  

let range = (start, end) => {
    let array = []; 
    for (x = start; x <= end; x++){
        array.push(x);
    }
    return array;
}
 
let sum = (arrayToSum) => {
    let sumOfArrayElements = 0;
    for (x = 0; x < arrayToSum.length; x++){
        sumOfArrayElements += arrayToSum[x];
    } 
    return sumOfArrayElements;
}  

/*
Alternatively, the array.reduce function can be utilized: 

    let sum = (arrayToSum) => {
     return arrayToSum.reduce((a,b) => a + b);
    }

*/

let rangeWithStep = (start, end, step = start <= end ? 1 : -1) => {
    let array = []; 
    for (x = start; start <= end ? x <= end : x >= end; x+= step){
        array.push(x);
    }
    return array;
}

console.log(rangeWithStep(1,4,2));