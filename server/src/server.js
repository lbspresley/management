const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Maria",
    birthday: "960121",
    gender: "uomo",
    job: "Student",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Natasha",
    birthday: "010425",
    gender: "uomo",
    job: "Cuoco",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "진패옥",
    birthday: "981225",
    gender: "donna",
    job: "Cameriere",
  },
];

app.get("/api/hello", function (req, res) {
  res.send({ message: "Hello Express!" });
});

app.get("/api/customers", function (req, res) {
  // res.send({ message: "Hello Express!" });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(customer);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
