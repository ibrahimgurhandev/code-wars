//mentor helped with this
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  for (var x = 0; x < a.length; x = x + 1) {
    if (a[x] > limit) {
      return false;
    }
  }
  return true;
}
