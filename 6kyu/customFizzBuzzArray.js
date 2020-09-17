// Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

// The function should be able to take up to 4 arguments:

// The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
// The 3rd and 4th arguments are integers, 3 and 5 by default.
// Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

// [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
// When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

// ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
// ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]


var fizzBuzzCustom = function (stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {
    var x;
    var arr = [];
    for (x = 1; x < 100; x++)
        if (x % numOne === 0 && x % numTwo === 0) {
            arr.push(stringOne + stringTwo)
        } else if (x % numTwo === 0) {
        arr.push(stringTwo)
    } else if (x % numOne === 0) {
        arr.push(stringOne)
    } else {
        arr.push(x)
    }
    return arr
};