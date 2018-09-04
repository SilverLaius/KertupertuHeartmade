const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mySql = require('mysql')
const app = express()
const SELECT_ALL_QUERY = 'SELECT * FROM test'

app.use(bodyParser.json())
app.use(cors())

const connection = mySql.createConnection({
	host:'localhost',
	user:'root',
	password:'password',
	database:'kertupertu'
})

connection.connect(err => {
	if (err) throw err;
  	console.log("Connected!");
})

app.get('/', (req,res) => {
	res.send('go to /products')
})

app.get('/products', (req,res) => {
	connection.query(SELECT_ALL_QUERY, (err, results) => {
		if(err) {
			return res.send(err)
		} 
		else {
			return res.json({
				data: results
			})
		}

	})
})

app.listen(3001, ()=> {
	console.log("Listening on port 3001")
})