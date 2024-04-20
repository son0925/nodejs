const express = require('express');
const path = require('path');

const port = '4000';

const app = express();

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

app.use((req,res,next) => {
  const timer = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTimer = Date.now();
  console.log(`${req.method} ${req.baseUrl} ${diffTimer}ms`);
})
app.use(express.json());
app.use('/static', express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
  res.send('Hello Git & NodeJs');
})

app.use('/users', usersRouter);
app.use('/posts', postsRouter);


app.listen(port, (req,res) => {
  console.log(`Running on port ${port}`);
})