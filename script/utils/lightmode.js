document.addEventListener('DOMContentLoaded', () => {
  const kotakModeGelap = document.getElementsByClassName('dark-mode-toggle');

  const ubahModeGelap = () => {
    document.body.classList.toggle('light');
    const adalahModeTerang = document.body.classList.contains('light');
    
    document.body.querySelectorAll('header nav ul li a').forEach(link => {
      link.style.color = adalahModeTerang ? 'black' : 'white';
    });

    const judulNavigasi = document.body.querySelector('.title-nav h1');
    if (judulNavigasi) {
      judulNavigasi.style.color = adalahModeTerang ? '#050C9C' : '#333';
    }

    const span1 = document.body.querySelector('.title-nav h1 span:nth-child(1)');
    const span2 = document.body.querySelector('.title-nav h1 span:nth-child(2)');
    const span3 = document.body.querySelector('.title-nav h1 span:nth-child(3)');

    if (span1) {
      span1.style.color = adalahModeTerang ? 'black' : '#35A29F';
    }
    if (span2) {
      span2.style.color = adalahModeTerang ? 'black' : '#97FEED';
    }
    if (span3) {
      span3.style.color = adalahModeTerang ? 'black' : '#97FEED';
    }
  };
  if(kotakModeGelap.length > 0) [
    kotakModeGelap[0].addEventListener('click', () => {
      ubahModeGelap();
    })
  ]
});
