/* 
    Write a function that takes a string
    and returns a number which is representative
    of the number of occurences a character of our 
    choices makes an appearance. 
*/ 

let countChars = (someString, someCharacter) => {
    let charCounter = 0;
    for (let char of someString) {
        if (char === someCharacter){
            charCounter +=1
        };
    } 
    return charCounter;
} 

console.log(countChars('If you follow all these coding challnges, you might learn something new!','u')); 
//2