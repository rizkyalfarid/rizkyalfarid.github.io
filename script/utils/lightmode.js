document.addEventListener('DOMContentLoaded', () => {
  const kotakModeGelap = document.querySelector('.dark-mode-toggle');

  const ubahModeGelap = () => {
    const adalahModeTerang = document.body.classList.toggle('light');
    if (adalahModeTerang) {
      // Mode Terang
      document.body.style.color = '#333'; 
      const nav = document.querySelector('header nav');
      document.querySelectorAll('header nav ul li a').forEach(link => {
        link.style.color = 'black'; 
      });
      document.querySelector('.title-nav h1').style.color = '#222'; 
      const spans = document.querySelectorAll('.title-nav h1 span');
      spans[0].style.color = '#000'; 
      spans[1].style.color = '#000'; 

      document.querySelector('header nav ul').style.backgroundColor = '#eaeaea';
      document.querySelector('.opened-word h1 span').style.color = '#021526';
      document.querySelector('.opened-word h1').style.color = '#021526';
      document.getElementById('typing-text').style.color = '#021526';
      
      document.querySelectorAll('.buttons a').forEach( item => {
        item.style.backgroundColor = '#021526';
        item.style.color = 'white';
      })
    } else {
      // Mode Gelap
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      const nav = document.querySelector('header nav');
      document.querySelectorAll('header nav ul li a').forEach(link => {
        link.style.color = 'white';
      });
      document.querySelector('.title-nav h1').style.color = '#333';
      const spans = document.querySelectorAll('.title-nav h1 span');
      spans[0].style.color = '#35A29F';
      spans[1].style.color = '#97FEED';
      document.querySelector('header nav ul').style.backgroundColor = '#252A30';
      document.querySelector('.opened-word h1 span').style.color = '#16F7FF';
      document.querySelector('.opened-word h1').style.color = 'white';
      document.getElementById('typing-text').style.color = '#16F7FF';

      document.querySelectorAll('.buttons a').forEach( item => {
        item.style.backgroundColor = '#97FEED';
        item.style.color = 'black';
      })
    }
  };

  if (kotakModeGelap) {
    kotakModeGelap.addEventListener('click', ubahModeGelap);
  }
});
