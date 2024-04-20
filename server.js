const express = require('express');

const port = '4000';

const Users = [
  {
    name: "Son",
    id: 0
  },
  {
    name: "Kim",
    id: 0
  }
]

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
  res.send('Hello Git & NodeJs');
})
app.get('/users', (req,res) => {
  res.json(Users);
})
app.get('/users/:userId', (req,res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.json(user);
  }
  else {
    res.status(400).send();
  }
})
app.post('/users', (req,res) => {
  const newUser = {
    name: req.body.name,
    id: Users.length
  }
  Users.push(newUser);
  res.json(newUser);
})

app.listen(port, (req,res) => {
  console.log(`Running on port ${port}`);
})