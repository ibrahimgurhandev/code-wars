// My first code-wars coding challenge - this is the beginning of an amazing journey

// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// my solution
var array = [1, -4, 7, 12];
function getPositiveSum(a) {
  var sum = 0;
  for (var a = 0; a < array.length; a++) {
    if (array[a] > 0) {
      sum += array[a];
    }
  }
  return sum;
}
console.log(getPositiveSum(array));
