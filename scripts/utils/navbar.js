const hamburgerBtn = document.getElementById('hamburgerBtn');

hamburgerBtn.addEventListener('click', () => {
  const navigation = document.getElementById('navigation');
  navigation.classList.toggle('show');
  const icon = document.getElementById('hamburger');
  if(icon.classList.contains('fa-bars-staggered')) {
    icon.classList.replace('fa-bars-staggered', 'fa-xmark');
  } else {
    icon.classList.replace('fa-xmark', 'fa-bars-staggered');
  }
})
