/*
    Write a function which builds a list structure 
    when given an array. Consequently, produce 
    a function which builds an array from a provided list. 
    --- 
    Create a helper function which takes an element &
    a list and prepends the element. Finally, create an 
    nth function which takes a list & a number and 
    returns the element at the given position in the list. 

    The list should look like: 

    { value: 3, 
        rest: { value: 2, 
            rest: { value: 1, 
                rest: null 
            } 
        } 
    }
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

let prepend = (someElement, list) => {
    return {value: someElement, rest: list}
} 

console.log(prepend(0,arrayToList(myArray))); 

let nth = (list, n) => {
    if (!list) {
        return false;
    }  
    if (n == 0) {
        return list.value
    } else {
        return nth(list.rest, n-1)
    }
}; 

console.log(nth(arrayToList(myArray),2) + 'nth!');