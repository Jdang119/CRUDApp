const express = require('express')
const mongoose = require('mongoose')
const app = express()




// GET request to READ user data
app.get('https://us-east-1.aws.data.mongodb-api.com/app/application-0-pnsca/endpoint/GetUser', (req, res) => {
    const JSONresponse = {
      FirstName:[],
      LastName:[],
      Email:[],
    }  
  res.send(JSONresponse)
})

// POST request to CREATE user data
app.get('https://us-east-1.aws.data.mongodb-api.com/app/application-0-pnsca/endpoint/CreatetUser', (req, res) => {
    const JSONresponse = {
      FirstName:[],
      LastName:[],
      Email:[],
    }  
  res.send(JSONresponse)
})


// PUT request to UPDATE user data
app.put('https://us-east-1.aws.data.mongodb-api.com/app/application-0-pnsca/endpoint/EditUser', (req, res) => {
    const JSONresponse = {
      FirstName:[],
      LastName:[],
      Email:[],
    }  
  res.send(JSONresponse)
})

// DELETE request to DELETE user data
app.delete('https://us-east-1.aws.data.mongodb-api.com/app/application-0-pnsca/endpoint/DeleteUser', (req, res) => {
  const JSONresponse = {
    FirstName:[],
    LastName:[],
    Email:[],
  }  
res.send(JSONresponse)
})