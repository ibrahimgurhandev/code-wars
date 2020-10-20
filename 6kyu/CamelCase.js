String.prototype.camelCase=function(){
    return this.split(' ').map(x=>x.charAt(0).toUpperCase()+ x.slice(1)).join('')
  }

//   https://www.codewars.com/kata/587731fda577b3d1b0001196
//   Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance: