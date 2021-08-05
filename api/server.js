// BUILD YOUR SERVER HERE
const express = require("express")
const User = require("../api/users/model")

const server = express()

server.use(express.json())
// set module.exports to export server
module.exports = server; // EXPORT YOUR SERVER instead of {}

//get - retrieves users
server.get("/api/users", (req,res) => {
  User.find()
    .then(users => {
      console.log(users)
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({message: "The users information could not be retrieved", err})
    })

})


//post - Update user
server.post("/api/users", (req,res) => {
  const newUser = req.body
  if(!newUser.name || !newUser.bio){
    res.status(400).json({message: "Please provide name and bio for the user"})
  }
  User.insert(newUser)
    .then(user => {
      res.json(user)
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({message: "There was an error while saving the user to the database", err})
    })
})



//Hello world
server.use("*", (req,res)=> {
  res.status(404).json({message: "hello there"})
})