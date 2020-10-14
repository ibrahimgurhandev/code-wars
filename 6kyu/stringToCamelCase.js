function toCamelCase(str){
 
    return str.replace(/(?<=_|-)./g, x=>x.toUpperCase()).replace(/[-_]/g,'')
    }
//https://www.codewars.com/kata/517abf86da9663f1d2000003
//     Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"