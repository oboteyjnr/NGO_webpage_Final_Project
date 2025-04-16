document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  // Fake form submission for demo
  document.getElementById('response').textContent = `Thanks for contacting us, ${name}! We’ll respond soon.`;

  this.reset();
});
