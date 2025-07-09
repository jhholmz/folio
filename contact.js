// Contact modal logic
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');
const contactLink = document.querySelector('a[href="#"]'); // Update selector if needed

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  form.reset();
  message.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    form.reset();
    message.classList.add('hidden');
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      message.classList.remove('hidden');
      form.reset();
    } else {
      alert('There was a problem sending your message.');
    }
  }).catch(error => {
    alert('There was a network error. Please try again.');
  });
});