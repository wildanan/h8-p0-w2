function konversiMenit(menit){
    return menit / 60
  }
  
  function detik(menit) {
    return menit % 60
  }
  
  console.log(konversiMenit(180) +':'+ detik(180))
  console.log(konversiMenit(63) +':'+ detik(63))
  console.log(konversiMenit(180) +':'+ detik(180))
  console.log(konversiMenit(180) +':'+ detik(180))