/*
    Write a function deepEqual that takes two values 
    & returns true only if they are the same 
    value, or if they are objects with the same props 
    when evaluated via a recursive call. 
*/

let deepEqual = (x, y)  => {
    if (x === y) return true;
    
    if (x == null || typeof x != "object" ||
        y == null || typeof y != "object") return false;
  
    let keysX = Object.keys(x), keysY = Object.keys(y);
  
    if (keysX.length != keysY.length) return false;
  
    for (let key of keysX) {
      if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
    }
  
    return true;
  }

const obj1 = { name: 'Chris', age: '26', profession: 'binkomon' }
const obj2 = { name: 'Chris', age: '26', profession: 'youll see' }

console.log(deepEqual(obj1, obj2))