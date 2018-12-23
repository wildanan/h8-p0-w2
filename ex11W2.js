/* Balik Kata */

function balikKata(kata) {
    var balik = kata
  
    for (var i = kata.length-1; i>0; i--) {
      balik = balik + i
    }
    return balik
  }
  
  console.log(balikKata(kata))