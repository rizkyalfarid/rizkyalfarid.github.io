import './utils/lightmode';
import './utils/hamburger';

// Typing effect
document.addEventListener('DOMContentLoaded', () => {
  const text = "Frontend Developer | UI/UX Designer";
  const typingText = document.getElementById('typing-text') as HTMLElement | null;

  let index = 0;

  function type() {
    if (typingText && index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});
