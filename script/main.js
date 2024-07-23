import './utils/lightmode.js';
import './utils/hamburger.js';

//typing effect
document.addEventListener('DOMContentLoaded', () => {
  const text = "Frontend Developer | UI/UX Designer";
  const typingText = document.getElementById('typing-text');

  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});
