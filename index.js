document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Parabéns ${name}, registro enviado com sucesso!`);
});
