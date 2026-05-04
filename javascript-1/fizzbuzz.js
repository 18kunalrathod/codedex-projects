// Here is how the game works: We count from 1 to a given number ("1, 2, 3, ..."):

// If the next number is a multiple of 3, we say "Fizz".
// If the next number is a multiple of 5, we say "Buzz".
// If the next number is a multiple of both 3 and 5, we say "FizzBuzz"!

// we have to write a program that takes a number as input and outputs the numbers from 1 to that number, using the above rules.

// For example, if the input is 10, the output should be:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz

// If the input is 16, the output should be:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16


let number = 16; //10;

for(let i=0; i<number; i++){
    if(i%3 === 0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if(i%3 === 0){
        console.log("Fizz")
    }
    else if(i%5===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
