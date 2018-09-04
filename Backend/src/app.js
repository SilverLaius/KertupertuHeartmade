const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.get('/', (req,res) => {
	res.send('welcome to the home page')
})

app.listen(3001, ()=> {
	console.log("Listening on port 3001")
})