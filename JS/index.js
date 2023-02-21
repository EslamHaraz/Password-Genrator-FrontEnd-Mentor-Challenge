//  Dom
let password = document.querySelector(".password");
let length = document.getElementById("pass-length");
let range = document.getElementById("range");
let upperCaseInput = document.getElementById("uppercase");
let lowerCaseInput = document.getElementById("lowercase");
let numbersInput = document.getElementById("numbers");
let symbolsInput = document.getElementById("symbols");
let genrateButton = document.querySelector(".generate-btn");
let level = document.querySelector(".level h1");
let blocks = document.getElementById("blocks");
let coby = document.querySelector(".fa-copy");
let head = document.querySelector(".head");
let text = "Genrator Password JS Pure";
console.log(coby);

// Options
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const Symbols = "@#$%&*^*!";
// Function
range.addEventListener("input", () => {
  length.textContent = range.value;
});
function RandomIndex(Number) {
  return Math.floor(Math.random() * Number);
}
genrateButton.onclick = () => {
  password.innerHTML = Genrate(range.value);
  level.innerHTML = Strength();
  blocks.classList = Strength();
};
function Genrate(Length) {
  let pass = "";
  while (pass.length < Length) {
    if (upperCaseInput.checked && pass.length < Length) {
      pass += upperCase[RandomIndex(upperCase.length)];
    }
    if (lowerCaseInput.checked && pass.length < Length) {
      pass += loweCase[RandomIndex(loweCase.length)];
    }
    if (numbersInput.checked && pass.length < Length) {
      pass += Numbers[RandomIndex(Numbers.length)];
    }
    if (symbolsInput.checked && pass.length < Length) {
      pass += Symbols[RandomIndex(Symbols.length)];
    }
  }

  return pass;
}
function Strength() {
  const length = range.value;
  let checkedBox = 0;
  let inputs = [
    lowerCaseInput,
    symbolsInput,
    numbersInput,
    upperCaseInput,
  ].filter((ele) => {
    return ele.checked ? checkedBox++ : "";
  });
  if (length < 8) return "easy";
  else if (length >= 8 && checkedBox > 1 && checkedBox < 4) return "medium";
  else if (length >= 8 && checkedBox == 4) return "hard";
}
coby.onclick = function () {
  let text = password.innerHTML;
  navigator.clipboard.writeText(text);
};

let i = 0;
let handler = setInterval(() => {
  head.innerHTML += text[i];
  i++;
  i>text.length-1?clearInterval(handler):""
},150);
