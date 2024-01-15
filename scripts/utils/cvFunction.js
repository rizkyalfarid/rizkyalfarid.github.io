const downloadBtn = document.getElementById('downloadButton');
downloadBtn.addEventListener('click', () => {
  window.location.href = '../public/cv/cv.pdf';
});