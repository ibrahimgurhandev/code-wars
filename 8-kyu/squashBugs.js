function findLongest(str) {
    console.log(str)
    return str.split(' ').sort((a,b)=>a.length>b.length).pop().length
    }

    // https://www.codewars.com/kata/56f173a35b91399a05000cb7