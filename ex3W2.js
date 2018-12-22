Tugas week 2 if-else

var nama = 'Sony'
var peran = ''

if ((nama === '') && (peran === '')){
  console.log('Maaf, Nama harus diisi')

} else if ((nama === 'Sony') && (peran === '')){
    console.log('Halo Sony, Pilih peranmu untuk memulai game!')

} else if ((nama === 'John') && (peran === 'Mage')){
    console.log('halo John! Selamat datang di magnia! Sebagai mage kamu akan bisa menguasai berbagai macam sihir disini, selamat mencoba mantramu!')

} else if ((nama === 'Roger') && (peran === 'Warrior')){
    console.log('Halo Roger! Selamat bergabung di Magnia! Sebagai warior kamu memiliki kekuatan fisik yang sangat baik dan kecepatan yang optimal untuk berperang dengan musuh, ayo berlatih!')

} else if ((nama === 'Jenny') && (peran === 'Healer')){
    console.log('Halo Jenny! Selamat bergabung di Magnia! Sebagai Healer kamu memiliki tugas untuk memberikan Support kepada rekan perangmu agar tetap bisa bertarung menguasai Magnia! perkuat mantra penyembuhanmu!')

}else{
    console.log('Salah Input')
}