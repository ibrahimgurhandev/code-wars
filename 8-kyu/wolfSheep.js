warnTheSheep= (queue)=>  queue.pop() === 'wolf'? "Pls go away and stop eating my sheep" : 
  `Oi! Sheep number ${queue.reverse().indexOf("wolf")+1}! You are about to be eaten by a wolf!`


//   https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15