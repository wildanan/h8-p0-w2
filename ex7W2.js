

 /* bintang 1 */

 console.log('Bintang 5')
var bintang = ''
var rows1 = 5
for (var i = 0; i < rows1 ; i++){
  bintang += '*'
  bintang += '\n'
} 
console.log(bintang)


 /* Bintang 5 deret */

 console.log('Bintang 5')
var bintang = ''
var rows2 = 5
for (var i = 0; i < rows2 ; i++){
  for (var j = 0; j < rows2; j++){
    bintang += '*'
  }
  bintang += '\n'
} 
console.log(bintang)
 
 /* bintang tangga */

 console.log('Bintang 5')
var bintang = ''
var rows3 = 5
for (var i = 0; i < rows3 ; i++){
  for (var j = 0; j <= i; j++){
    bintang += '*'
  }
  bintang += '\n'
} 
console.log(bintang)

  