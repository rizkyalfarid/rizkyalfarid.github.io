const hamburgerBtn = document.getElementById('hamburgerBtn');
const navigation = document.getElementById('navigation');
const icon = document.getElementById('hamburger');

// Toggle navigation visibility on hamburger button click
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (event) => {
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

document.addEventListener('click', (event) => {
  if (navigation && !navigation.contains(event.target) && !hamburgerBtn.contains(event.target)) {
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
