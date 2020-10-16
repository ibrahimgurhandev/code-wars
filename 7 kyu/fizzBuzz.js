// Return an array
function fizzbuzz(n){
    let array = []
    for(var i=1;i<=n;i++){
     i % 15===0 ? array.push('FizzBuzz') : i % 5===0 ? array.push('Buzz') :
     i % 3===0 ? array.push('Fizz'): array.push(i)
    }
     return array
   }

//    https://www.codewars.com/kata/5300901726d12b80e8000498
//    Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less than 1).

// C# ONLY: If N is smaller than or equal to 0, throw an ArgumentOutOfRangeException!
// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
// C# method calling example:

// string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]