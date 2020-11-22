function arrayMadness(a, b) {
    return a.reduce((a,c)=>a+(c**2),1) > b.reduce((a,c)=>a+(c**3),1)
  }

//   https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1