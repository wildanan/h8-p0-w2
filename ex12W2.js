function konversiMenit(menit){
  var jam = Math.floor(menit / 60)
  var menitOutput = menit % 60

  if (menitOutput < 10){
    menitOutput = '0' + menitOutput
  }
  return jam + ':' + menitOutput
}


// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00