const hamburgerBtn = document.getElementById('hamburgerBtn') as HTMLElement;
const navigation = document.getElementById('navigation') as HTMLElement;
const icon = document.getElementById('hamburger') as HTMLElement;

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (event: MouseEvent) => {
    if (navigation) {
      navigation.classList.toggle('show');
    }

    if (icon) {
      if (icon.classList.contains('fa-bars-staggered')) {
        icon.classList.replace('fa-bars-staggered', 'fa-xmark');
      } else {
        icon.classList.replace('fa-xmark', 'fa-bars-staggered');
      }
    }

    event.stopPropagation();
  });
}

document.addEventListener('click', (event: MouseEvent) => {
  if (navigation && !navigation.contains(event.target as Node) && !hamburgerBtn.contains(event.target as Node)) {
    navigation.classList.remove('show');
    
    if (icon && icon.classList.contains('fa-xmark')) {
      icon.classList.replace('fa-xmark', 'fa-bars-staggered');
    }
  }
});

window.addEventListener('scroll', () => {
  if (navigation && navigation.classList.contains('show')) {
    navigation.classList.remove('show');
    
    if (icon && icon.classList.contains('fa-xmark')) {
      icon.classList.replace('fa-xmark', 'fa-bars-staggered');
    }
  }
});
