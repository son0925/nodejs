const Users = require('../models/users.model');

function getUsers(req,res) {
  res.json(Users);
}

function getUser(req,res) {
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.json(user);
  }
  else {
    res.status(400).send();
  }
}

function postUser(req,res) {
  const newUser = {
    name: req.body.name,
    id: Users.length
  }
  Users.push(newUser);
  res.json(newUser);
}

module.exports = {
  getUsers,
  getUser,
  postUser
}