

function AlertForm(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  window.alert(`Parabéns ${name}!, registro enviado com sucesso.`);
}
