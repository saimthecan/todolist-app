// backend server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createToken, verifyToken } = require('./jwt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/api/user/', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    const token = createToken({ email: user.email });
    // dönen objeye email ekledik
    res.status(200).send({ email: user.email, token });
  } else {
    res.status(401).send('Email and password do not match');
  }
});

// More routes can be added here

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
