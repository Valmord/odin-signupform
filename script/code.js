const sharkArr = [
  'Basking Shark',
  'Bigeye Thresher Shark',
  'Blacktip Reef Shark',
  'Blue Shark',
  'Bull Shark',
  'Frilled Shark',
  'Goblin Shark',
  'Great Hammerhead Shark',
  'Great White Shark',
  'Greenland Shark',
  'Lemon Shark',
  'Leopard Shark',
  'Nurse Shark',
  'Porbeagle',
  'Port Jackson Shark',
  'Sand Devil',
  'Sand Tiger Shark',
  'Shortfin Mako Shark',
  'Silky Shark',
  'Small-Spotted Catshark',
  'Spiny Dogfish',
  'Tiger Shark',
  'Whale Shark',
  'Whitetip Reef Shark'
]

const sharkSelectElement = document.querySelector('form select');

sharkArr.forEach(shark => {
  let sharkElement = document.createElement('option');
  sharkElement.setAttribute('label', `${shark}`);
  sharkElement.textContent = shark;
  sharkSelectElement.appendChild(sharkElement);
})

const inputs = document.querySelectorAll('form input');

inputs.forEach(input => {
  input.addEventListener('input', event => {
    if (input.value.length) {
      input.classList.add('input-check-visible');
    }
  },{ once: true})
})

function checkPasswords(){
  if (pwd.value !== cpwd.value && (pwd.value.length && cpwd.value.length)) {
    pwdSpan.classList.add('password-nomatch');
  } else {
    pwdSpan.classList.remove('password-nomatch');  
  }
}

const pwdSpan = document.querySelector("form #password+span");
console.log(pwdSpan);
const pwd = document.querySelector("form #password");
const cpwd = document.querySelector("form #confirm-password");
pwd.addEventListener('change',checkPasswords);
cpwd.addEventListener('change',checkPasswords);


const firstName = document.querySelector("form .first-name");
firstName.addEventListener('change', () => {
  if (!firstName.checkValidity()) {
    firstName.classList.add('help-text');
  } else {
    firstName.classList.remove('help-text');
  }
})