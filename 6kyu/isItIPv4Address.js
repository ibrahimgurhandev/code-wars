String.prototype.ipv4Address=function(){
    return (/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/).test(this)
  }


//   https://www.codewars.com/kata/567fe8b50c201947bc000056