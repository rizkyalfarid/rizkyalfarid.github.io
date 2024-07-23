document.addEventListener('DOMContentLoaded', () => {
  const kotakModeGelap = document.querySelector('.dark-mode-toggle');
  
  const ubahModeGelap = () => {
    const adalahModeTerang = document.body.classList.toggle('light');
    const warnaTeks = adalahModeTerang ? 'white' : 'white';
    const warnaJudul = adalahModeTerang ? '#050C9C' : '#333';
    const warnaSpan1 = adalahModeTerang ? 'black' : '#35A29F';
    const warnaSpan2 = adalahModeTerang ? 'black' : '#97FEED';
    
    document.querySelectorAll('header nav ul li a').forEach(link => {
      link.style.color = warnaTeks;
    });

    document.querySelector('header nav ul').style.backgroundColor = adalahModeTerang ? 'grey' : '#1D2B53';

    const judulNavigasi = document.querySelector('.title-nav h1');
    if (judulNavigasi) {
      judulNavigasi.style.color = warnaJudul;
    }

    const spans = document.querySelectorAll('.title-nav h1 span');
    if (spans.length > 0) {
      spans[0].style.color = warnaSpan1;
      if (spans[1]) spans[1].style.color = warnaSpan2;
      if (spans[2]) spans[2].style.color = warnaSpan2;
    }
  };

  if (kotakModeGelap) {
    kotakModeGelap.addEventListener('click', ubahModeGelap);
  }
});
