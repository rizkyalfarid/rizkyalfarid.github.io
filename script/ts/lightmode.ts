document.addEventListener('DOMContentLoaded', () => {
  const kotakModeGelap = document.querySelector('.dark-mode-toggle') as HTMLInputElement | null;

  const ubahModeGelap = () => {
    const adalahModeTerang = document.body.classList.toggle('light');
    if (adalahModeTerang) {
      // Mode Terang
      document.body.style.color = '#333';
      const nav = document.querySelector('header nav') as HTMLElement | null;
      if (nav) {
        (nav.querySelector('ul') as HTMLElement).style.backgroundColor = '#eaeaea';
      }
      document.querySelectorAll('header nav ul li a').forEach((link) => {
        (link as HTMLElement).style.color = 'black';
      });

      const h1Title = document.querySelector('.title-nav h1') as HTMLElement | null;
      if (h1Title) {
        h1Title.style.color = '#222';
        const spans = h1Title.querySelectorAll('span');
        (spans[0] as HTMLElement).style.color = '#000';
        (spans[1] as HTMLElement).style.color = '#000';
      }

      const openedWordTitle = document.querySelector('.opened-word h1') as HTMLElement | null;
      if (openedWordTitle) {
        openedWordTitle.style.color = '#021526';
        const openedWordSpan = openedWordTitle.querySelector('span') as HTMLElement | null;
        if (openedWordSpan) {
          openedWordSpan.style.color = '#021526';
        }
      }

      const typingText = document.getElementById('typing-text') as HTMLElement | null;
      if (typingText) {
        typingText.style.color = '#021526';
      }

      document.querySelectorAll('.buttons a').forEach((item) => {
        (item as HTMLElement).style.backgroundColor = '#021526';
        (item as HTMLElement).style.color = 'white';
      });
    } else {
      // Mode Gelap
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      
      const nav = document.querySelector('header nav') as HTMLElement | null;
      if (nav) {
        (nav.querySelector('ul') as HTMLElement).style.backgroundColor = '#252A30';
      }

      document.querySelectorAll('header nav ul li a').forEach((link) => {
        (link as HTMLElement).style.color = 'white';
      });

      const h1Title = document.querySelector('.title-nav h1') as HTMLElement | null;
      if (h1Title) {
        h1Title.style.color = '#333';
        const spans = h1Title.querySelectorAll('span');
        (spans[0] as HTMLElement).style.color = '#35A29F';
        (spans[1] as HTMLElement).style.color = '#97FEED';
      }

      const openedWordTitle = document.querySelector('.opened-word h1') as HTMLElement | null;
      if (openedWordTitle) {
        openedWordTitle.style.color = 'white';
        const openedWordSpan = openedWordTitle.querySelector('span') as HTMLElement | null;
        if (openedWordSpan) {
          openedWordSpan.style.color = '#97FEED';
        }
      }

      const typingText = document.getElementById('typing-text') as HTMLElement | null;
      if (typingText) {
        typingText.style.color = '#97FEED';
      }

      document.querySelectorAll('.buttons a').forEach((item) => {
        (item as HTMLElement).style.backgroundColor = '#97FEED';
        (item as HTMLElement).style.color = 'black';
      });
    }
  };

  if (kotakModeGelap) {
    kotakModeGelap.addEventListener('click', ubahModeGelap);
  }
});
