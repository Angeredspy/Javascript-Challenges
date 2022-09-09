/*
    Write a program that uses console.log to print all the numbers
    from 1 to 100 with two exceptions- for numbers divisible by 3
    print 'Fizz'. For numbers divisible by 5, print 'Buzz' & 
    for numbers divisible by both 5 & 3 print 'FizzBuzz'! 
*/ 

for (let x = 0; x <= 100; x++){
    if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log('FizzBuzz!')
    } else if (x % 3 === 0){
        console.log('Fizz');
    } else if (x % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(x);
    }
}; 

