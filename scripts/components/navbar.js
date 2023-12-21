const hamburgerBtn = document.getElementById('hamburgerBtn');

hamburgerBtn.addEventListener('click', () => {
  const navigation = document.getElementById('navigation');
  navigation.classList.toggle('show')

  const icon = document.getElementById('hamburger');
  const mainProfile = document.getElementById('main-profile');

  if(icon.classList.contains('fa-bars-staggered')) {
    icon.classList.replace('fa-bars-staggered', 'fa-xmark');
    mainProfile.style.display = 'none';
  } else {
    icon.classList.replace('fa-xmark', 'fa-bars-staggered');
    mainProfile.style.display = 'block';
  }
})
