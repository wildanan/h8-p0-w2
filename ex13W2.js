function xo (str){
  var o = 0
  var x = 0
  var banding = false
  
  for (var i = 0; i < str.length; i++){
    if (str[i] === 'x'){
      o++
    } else if (str[i] === 'o'){
      x++
    } 
  }
  return x === o; banding = true
  }
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true