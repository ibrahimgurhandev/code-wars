const solve = (s)=>{
    let uppercaseCount = s.match(/[A-Z]/g).length
    let lowercaseCount = s.match(/[a-z]/g).length
    let nums = s.match(/\d/g).length
    let special = s.match(/\W/g).length
    return [uppercaseCount,lowercaseCount,nums,special]
  }


//   https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

//   In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercas