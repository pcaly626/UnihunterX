const express = require('express')
const bodyParser = require('body-parser')
const query = require("./queries")
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/monsters_by_rate/', function( request, response){
  console.log("recieved")
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
