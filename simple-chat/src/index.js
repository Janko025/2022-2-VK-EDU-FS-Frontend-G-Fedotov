const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const messages = document.querySelector(".messages");

form.addEventListener("submit", handleKeyPress);
form.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const date = new Date();
    let setValue = {
      "message": input.value,
      "date": `${date.getHours()}:${date.getMinutes()}`,
      "stat": null,
    };
    localStorage.setItem(`${generetorKeys()}`, JSON.stringify(setValue));
    createBlock(setValue);
    input.value = "";
  }
}

function createBlock(setValue) {
  const block = document.createElement("div");
  block.className = "message right";
  block.innerHTML = `
  <div class="message-text">${setValue.message}</div>
  <div class="message-meta">
      <div class="message-date">${setValue.date}</div>
      <div class="message-status">
          <span class="material-icons"></span>
          </div>
  </div>
    `;
  messages.append(block);
}

function startRender() {
  const chat = Object.keys(localStorage).sort();
  chat.forEach((item) => {
    const value = localStorage.getItem(item);
    createBlock(JSON.parse(value));
  });
}

function generetorKeys() {
  let numberKeys = Object.keys(localStorage).sort();
  let numberKey
  if(numberKeys.length == 0) {
    numberKey = 1;
    return numberKey
  }
  else {
    numberKey = 1 + parseInt(numberKeys[numberKeys.length - 1]);
    return numberKey
  }
} 

startRender();
