const name = document.querySelector("#name").value;

function AlertForm(event) {
  event.preventDefault();
  const message = `Parabéns ${name}, registro enviado com sucesso!`
  window.alert(message);
}
