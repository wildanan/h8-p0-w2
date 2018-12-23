function konversiMenit(menit){
    return menit / 60
  }
  
  function detik(menit) {
    return menit % 60
  }
  
  console.log(konversiMenit(63) +':'+ detik(63))
  console.log(konversiMenit(124) +':'+ detik(124))
  console.log(konversiMenit(53) +':'+ detik(53))
  console.log(konversiMenit(88) +':'+ detik(88))
  console.log(konversiMenit(120) +':'+ detik(120))