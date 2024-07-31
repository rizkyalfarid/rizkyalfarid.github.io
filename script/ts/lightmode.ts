document.addEventListener('DOMContentLoaded', () => {
  const kotakModeGelap = document.querySelector('.dark-mode-toggle') as HTMLElement | null;

  const ubahModeGelap = () => {
    const adalahModeTerang = document.body.classList.toggle('light');

    if (adalahModeTerang) {
      // Mode Terang
      document.body.style.color = '#333';
      
      const nav = document.querySelector('header nav') as HTMLElement | null;
      document.querySelectorAll('header nav ul li a').forEach(link => {
        (link as HTMLElement).style.color = 'black';
      });

      const titleNavH1 = document.querySelector('.title-nav h1') as HTMLElement | null;
      if (titleNavH1) {
        titleNavH1.style.color = '#222';
        const spans = titleNavH1.querySelectorAll('span');
        if (spans.length > 0) spans[0].style.color = '#000';
        if (spans.length > 1) spans[1].style.color = '#000';
      }

      const navUl = document.querySelector('header nav ul') as HTMLElement | null;
      if (navUl) {
        navUl.style.backgroundColor = '#eaeaea';
      }

      const openedWordH1Span = document.querySelector('.opened-word h1 span') as HTMLElement | null;
      if (openedWordH1Span) openedWordH1Span.style.color = '#021526';

      const openedWordH1 = document.querySelector('.opened-word h1') as HTMLElement | null;
      if (openedWordH1) openedWordH1.style.color = '#021526';

      const typingText = document.getElementById('typing-text') as HTMLElement | null;
      if (typingText) typingText.style.color = '#021526';

      document.querySelectorAll('.buttons a').forEach(item => {
        const button = item as HTMLElement;
        button.style.backgroundColor = '#021526';
        button.style.color = 'white';
        button.style.boxShadow = 'none';
      });

      const boxItemPerkenalanH1 = document.querySelector('.box-item--perkenalan h1') as HTMLElement | null;
      if (boxItemPerkenalanH1) boxItemPerkenalanH1.style.color = '#000';

      const boxItemPerkenalan = document.querySelector('.box-item--perkenalan') as HTMLElement | null;
      if (boxItemPerkenalan) boxItemPerkenalan.style.border = '2px solid #021526';

      const imageIllustration = document.querySelector('.image-illustration') as HTMLElement | null;
      if (imageIllustration) imageIllustration.style.border = '3px solid #021526';

    } else {
      // Mode Gelap
      document.body.style.backgroundColor = '';
      document.body.style.color = '';

      const nav = document.querySelector('header nav') as HTMLElement | null;
      document.querySelectorAll('header nav ul li a').forEach(link => {
        (link as HTMLElement).style.color = 'white';
      });

      const titleNavH1 = document.querySelector('.title-nav h1') as HTMLElement | null;
      if (titleNavH1) {
        titleNavH1.style.color = '#333';
        const spans = titleNavH1.querySelectorAll('span');
        if (spans.length > 0) spans[0].style.color = '#35A29F';
        if (spans.length > 1) spans[1].style.color = '#97FEED';
      }

      const navUl = document.querySelector('header nav ul') as HTMLElement | null;
      if (navUl) {
        navUl.style.backgroundColor = '#252A30';
      }

      const openedWordH1Span = document.querySelector('.opened-word h1 span') as HTMLElement | null;
      if (openedWordH1Span) openedWordH1Span.style.color = '#16F7FF';

      const openedWordH1 = document.querySelector('.opened-word h1') as HTMLElement | null;
      if (openedWordH1) openedWordH1.style.color = 'white';

      const typingText = document.getElementById('typing-text') as HTMLElement | null;
      if (typingText) typingText.style.color = '#16F7FF';

      document.querySelectorAll('.buttons a').forEach(item => {
        const button = item as HTMLElement;
        button.style.backgroundColor = '#16F7FF';
        button.style.color = 'black';
        button.style.boxShadow = '0 0 5px #16F7FF';
      });

      const boxItemPerkenalanH1 = document.querySelector('.box-item--perkenalan h1') as HTMLElement | null;
      if (boxItemPerkenalanH1) boxItemPerkenalanH1.style.color = '#16F7FF';

      const imageIllustration = document.querySelector('.image-illustration') as HTMLElement | null;
      if (imageIllustration) imageIllustration.style.border = '3px solid #16F7FF';
    }
  };

  if (kotakModeGelap) {
    kotakModeGelap.addEventListener('click', ubahModeGelap);
  }
});
