function arrayDiff(a, b) {
    return a.filter((x,i,arr)=>!b.includes(x))
  }

//   https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]