class Question {
  constructor(message, name, lastname, email, address, cellphone) {
    this.id = uuid();
    this.message = message;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.address = address;
    this.cellphone = cellphone;
  }
}

const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const app = express();

app.use(cors());
app.use(express.json());

const questions = [];

function checkInputs(req, res, next){
    const { message, name, lastname, email, address, cellphone } = req.body;
    if(!message || !name || !lastname || !email || !address || !cellphone){
        return res.status(403).json({
            error: 'Please, fill all the empty fields.'
        })
    } return next();
}

app.post("/questions", checkInputs, (req, res) => {
  try {
    const { message, name, lastname, email, address, cellphone } = req.body;
    const question = new Question(
      message,
      name,
      lastname,
      email,
      address,
      cellphone
    );
    questions.push(question);
    return res.status(201).json(question);
  } catch (error) {
    console.log(`${error}`);
    return res.status(500).send("Something went wrong.");
  }
});

app.get("/questions", (req, res) => {
  try {
    return res.json(questions);
  } catch (error) {
    console.log(`${error}`);
    return res.status(500).send("Something went wrong.");
  }
});



app.listen(3011);
