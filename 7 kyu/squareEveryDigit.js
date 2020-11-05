function squareDigits(num){
    return parseInt(Array.from(String(num),Number).map(x=>x*x).join(''))
     
   }
//    https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//    Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer