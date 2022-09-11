/*
    Write a function which builds a list structure 
    when given an array. Consequently, produce 
    a function which builds an array from a provided list. 
    --- 
    Create a heloper function which takes an element &
    a list and prepends the element. Finally, create an 
    nth function which takes a list & a number and 
    returns the element at the given position in the list. 
*/ 

let arrayToList = (someArray) => { 
    let list = null; 
    for (let x = someArray.length - 1; x >=0; x--) {
        list = {value: someArray[x], rest: list}
    }
    return list;
}; 

let myArray = [3, 2, 1]; 

console.log(arrayToList(myArray)) 

let listToArray = (someList) => {
    let myArray = [];
    for (let x = someList; x; x = x.rest) {
        myArray.push(x.value)
    }
    return myArray;
};

console.log(listToArray(arrayToList(myArray)));