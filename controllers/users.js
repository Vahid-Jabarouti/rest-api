const { v4: uuidv4 } = require('uuid');

let users = [
  {
  firstName: "Vahid",
  lastName: "Jabarouti",
  age: 24
},
{
  firstName: "Alan",
  lastName: "Turing",
  age: 27
}
]

exports.createUser = (req, res) => {
  const user = req.body

  users.push({...user, id: uuidv4()})

  res.send(`user with the name ${user.firstName} added to the db...`)
}

exports.getUsers = (req, res) => {
  res.send(users)
}

exports.getUser = (req, res) => {
  const {id} = req.params

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
}

exports.deleteUser = (req, res) => {
  const {id} = req.params

  users = users.filter((user) => user.id !== id)

  res.send('User with the id ${id} deleted from the db...')
}

exports.updateUser = (req, res) => {
  const {id} = req.params
  const {firstName, lastName, age} = req.body

  const user = users.find((user) => user.id === id)

  if(firstName) user.firstName = firstName
  if(lastName) user.lastName = lastName
  if(age) user.age = age

  res.send(`User with the id ${id} has been updated`)

}