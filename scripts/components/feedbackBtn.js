const feedBackBtn = document.getElementById('feedbackBtn');
feedBackBtn.addEventListener('click', function (event){
  event.preventDefault()
  const feedbackBox = document.getElementById('feedbackBox');
  if(feedbackBox.value == '') {
    alert('Input Feedback masih kosong silahkan isi !')
  } else {
    tampilkanPesan()
  }
})

function tampilkanPesan() {
  alert('Pesan sudah terkirim');
  alert('Sayangnya fitur feedback nya belum tersedia😓');
  alert('Terima kasih sudah mengirim feedback ya🥺');
}