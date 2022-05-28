const tip = document.querySelector(".advice");
const button = document.querySelector(".button");
const id = document.querySelector('.advice-id')

window.addEventListener('load', fetchTip)
button.addEventListener("click", fetchTip);

function fetchTip() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => displayTip(data))
    .catch(err => showError())
}

function displayTip(data) {;
  tip.textContent = data.slip.advice;
  id.textContent = "#" + data.slip.id
}

function showError() {
  alert('You are clicking too quick')
}
