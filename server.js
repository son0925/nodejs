const express = require('express');

const port = '4000';

const app = express();

const usersController = require('./controllers/users.controller');
const postsController = require('./controllers/posts.controller');

app.use((req,res,next) => {
  const timer = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTimer = Date.now();
  console.log(`${req.method} ${req.url} ${diffTimer}ms`);
})
app.use(express.json());

app.get('/', (req,res) => {
  res.send('Hello Git & NodeJs');
})
app.get('/users', usersController.getUsers);
app.get('/users/:userId', usersController.getUser);
app.post('/users', usersController.postUser);

app.get('/posts', postsController)

app.listen(port, (req,res) => {
  console.log(`Running on port ${port}`);
})