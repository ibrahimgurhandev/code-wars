function alphabetPosition(text) {
    let array = []
    
    for (var i=0; i<text.length;i++){
     let x = text.toLowerCase().charCodeAt(i) - 97 + 1
      if(x>0 && x<=26){
        array.push(x)}
    }
    
    return String(array.join(' '))
  }
  

//   https://www.codewars.com/users/ibrahimgurhan/completed_solutions
//   Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)