// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
  themeToggle.textContent = mode === 'dark' ? '☀️' : '🌙';
});

// Load Theme from Local Storage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }
});

// Form Validation with Accessibility
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formMessages = document.getElementById('form-messages');

  if (!name || !email || !message) {
    e.preventDefault();
    formMessages.textContent = 'Please fill out all required fields.';
    formMessages.style.color = 'red';
  } else {
    formMessages.textContent = '';
    alert('Your message has been sent successfully!');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
