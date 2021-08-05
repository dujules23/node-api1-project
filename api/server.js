// BUILD YOUR SERVER HERE
const express = require("express")

const server = express()

server.use(express.json())
// set module.exports to export server
module.exports = server; // EXPORT YOUR SERVER instead of {}

//Hello world
server.use("*", (req,res)=> {
  res.status(200).json({message: "hello there"})
})