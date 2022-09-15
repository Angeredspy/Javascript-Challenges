/* 
Reverse a string, and then confirm 
whether or not the string that was reversed is a 
palindrome
*/ 

let stringReverser = (someString) => {
    let newStringArray = [];

    for (let char of someString) {
        newStringArray.unshift(char);
    };

    let reversedArray = newStringArray.reduce((a,b)=> a.concat(b))
    let lowerCaseReversedString = reversedArray.toLowerCase();
    let lowerCaseBaseString = someString.toLowerCase();
        
    if (lowerCaseBaseString === lowerCaseReversedString) {
        console.log(`This checks out. The input word ${lowerCaseBaseString} spelled backwards is ${lowerCaseReversedString},
         so this is indeed a palindrome!`);
    } else {
        console.log(`This doesnt check out. The input word ${lowerCaseBaseString} spelled backwards is ${lowerCaseReversedString},
        so this not a palindrome!`);
    }

}

stringReverser('Missim');