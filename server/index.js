const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();

const { login, register, decode, encrypt } = require("./controller");

app.post(`/api/login`, login);
app.post(`/api/register`, register);

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.post(`/api/Cipher/`, (req, res) => {
  const charTwo = req.body.char;
  const shiftValueTwo = req.body.shiftValue;
  const sentTwo = [...charTwo]
    .map((charTwo) => encrypt(charTwo, shiftValueTwo))
    .join("");

  res.status(200).send(sentTwo);
});
app.post(`/api/decode/`, (req, res) => {
  const char = req.body.char;
  const shiftValue = req.body.shiftValue;
  const sent = [...char].map((char) => decode(char, shiftValue)).join("");
  res.status(200).send(sent);
});

app.listen(port, () => console.log("Server running on 4000"));
