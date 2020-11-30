function lowercaseCount(str){
    return str.replace(/[^a-z]/g,'').split('').filter(x=>x===x.toLowerCase()).length
  }


//   https://www.codewars.com/kata/56a946cd7bd95ccab2000055