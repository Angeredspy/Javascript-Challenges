/* 
    Construct a higher-order function 
    which acts as a for loop. 
    The function accepts a value, test function
    update function & a body function. 
    -- 
    Every iteration, it first runs the test function on
    the current loop value and stops if it returns false. 
    It then calls the body function, passing the current value. 
    Use the update function to create a new value & start 
    from the beginning  
*/ 

let customLoop = (value, test, update, body) => {
    for (let x = value; test(x); x = update(x)) {
        body(x);
    }
} 

console.log(customLoop(3, (n) => n >= 0, (n) => n -= 1, console.log))