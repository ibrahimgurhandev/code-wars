//Javascript  solution

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

//Java solution

//   public class SmallestIntegerFinder {
//     public static int findSmallestInt(int[] args) {
//       int min = args[0];
//       for(int i = 1;i<args.length;i++){
//         if(min > args[i]){
//         min = args[i];
//         }
//       }
//       return min;
//     }
// }


// https://www.codewars.com/users/ibrahimgurhan/completed_solutions