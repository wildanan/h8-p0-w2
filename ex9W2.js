/* soal 1 */

function shoutOut (){
    console.log('Hello Function!')
}

shoutOut()
}

/* Soal 2 */

function calculateMultiply (a, b) {
  
    var num1 = a
    var num2 = b
  
    var hasilPerkalian = num1 * num2
    
    return(hasilPerkalian)  
  }
  
  calculateMultiply (5, 6)

  /* Soal 3 */

  function processSentences (a, b, c, d,) {

    var name = a
    var age = b
    var address = c
    var hobby = d
  
    var fullSentence = 'nama saya ' + name + ', umur saya ' + age + ', alamat saya di ' + address + ', dan saya punya hobi, yaitu ' + hobby
  
    return(fullSentence)
  }
  
  processSentences ('Agus', '30', 'jln. Malioboro, Jogjakarta', 'gaming')