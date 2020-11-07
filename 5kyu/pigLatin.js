function pigIt(str){
    return str.replace(/\w+/g, match => match.slice(1) + match.charAt(0) + "ay");
  }


//   https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
//   Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !