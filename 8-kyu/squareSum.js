function squareSum(numbers){
    //with Reduce
   return numbers.reduce((a,c)=>a+(c*c),0)
     
     //with eval
   //return eval(numbers.map((x)=>x*x).join('+'))
   }


   function squareSum(numbers){
    return numbers.length>0?numbers.map((x)=>Math.pow(x,2)).reduce((a,b)=>a+b):0
    }