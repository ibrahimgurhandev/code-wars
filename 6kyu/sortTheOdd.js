function sortArray(array) {
    console.log(array)
     let sortedOdd = array.filter(x=>x%2!==0).sort((a,b)=>a-b)
     let temp = array.map(x=> x%2!==0? sortedOdd.shift() : x ) 
   return temp
  }

//   https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
//   You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]