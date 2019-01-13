/*Tugas week 2 if-else*/

var nama = 'Dimas'
var peran = 'Warrior'

if ((nama === '') && (peran === '')){
  console.log('Maaf, Nama harus diisi')

} else if ((nama) && (peran === '')){
    console.log('Hallo ' + nama + ', Pilih peranmu untuk memulai game!')

} else if ((nama) && (peran === 'Mage')){
    console.log('Hallo ' + nama + ' Selamat datang di magnia! Sebagai mage kamu akan bisa menguasai berbagai macam sihir disini, selamat mencoba mantramu!')

} else if ((nama) && (peran === 'Warrior')){
    console.log('Hallo ' + nama + ' Selamat bergabung di Magnia! Sebagai warior kamu memiliki kekuatan fisik yang sangat baik dan kecepatan yang optimal untuk berperang dengan musuh, ayo berlatih!')

} else if ((nama) && (peran === 'Healer')){
    console.log('Hallo ' + nama + ' Selamat bergabung di Magnia! Sebagai Healer kamu memiliki tugas untuk memberikan Support kepada rekan perangmu agar tetap bisa bertarung menguasai Magnia! perkuat mantra penyembuhanmu!')

}else{
    console.log('Salah Input')
}