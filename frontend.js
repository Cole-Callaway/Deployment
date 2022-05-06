const baseURL = `http://localhost:4000/api/`;

//compliments
document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//fortune
document.getElementById("fortune").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//Cipher code
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//encrypt
const form = document.getElementById("cipher");
const caesarCipher = document.getElementById("encrypt");
const output = document.getElementById("output");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const shiftTwo = Number(form.shift.value);
  const char = form.plaintext.value;
  const objTwo = { char, shiftValue: shiftTwo };
  axios.post(`${baseURL}Cipher`, objTwo).then(function (response) {
    // const data = response.data;
    output.innerHTML = response.data;
  });
});

//decrypt
const reverse = document.getElementById("reverse");
const decrypt = document.getElementById("decrypt");
const decodeOutput = document.getElementById("decode");
reverse.addEventListener("submit", (event) => {
  event.preventDefault();
  const shift = Number(form.shift.value);
  const char = reverse.plaintext.value;
  const obj = { char, shiftValue: shift };
  axios.post(`${baseURL}decode`, obj).then(function (response) {
    // const data = response.data;
    decodeOutput.innerHTML = response.data;
  });
});
