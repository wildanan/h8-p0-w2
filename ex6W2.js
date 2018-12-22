

/* 1. LOOPING WHILE */
console.log('LOOPING PERTAMA')
var bos = 1
    while (bos <= 20) {
        if(bos % 2 === 0)
        console.log(bos + ' - i Love Coding')
        bos++
 }

 console.log('LOOPING KEDUA')  
 var num = 20
    while (num > 1) {
        if(num % 2 === 0)
        console.log(num + ' - I will become fullstack developer')
        num--
}

/* 2. LOOPING FOR */

console.log('CODINGAN PERTAMA')
for (var i = 0; i <= 20; i++) {
  console.log(i + '- I love coding')
}
console.log('CODINGAN KEDUA') 
for (var j = 20; j >= 0; j--){
  console.log(j + '- I will become fullstack developer')
  }


  for (var i = 0; i <= 100; i++) {
    if(i % 2 === 0)
    console.log(i + ' GENAP')
    else(i % 2 === 1)
    console.log(i + ' GANJIL')
  }
  
  
  /* 3. LOOPING GANJIL GENAP */

  console.log('2 Kelipatan 2')
  for(var deret = 0; deret <= 100; deret += 2){
    console.log(deret)
  }
  console.log('5 Kelipatan 5')
  for(var deret2 = 0; deret2 <=100; deret2 += 5) {
    console.log(deret2)
  }
  console.log('10 Kelipatan 10')
  for(var deret3 = 0; deret3 <= 100; deret3 += 9) {
    console.log(deret3)
  }