// https://www.codewars.com/kata/559590633066759614000063/solutions/javascript

// Story
// Ben has a very simple idea to make some he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)];
  }