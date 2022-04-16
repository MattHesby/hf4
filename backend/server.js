//get the things we need
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')
const database = require('./my-database');

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
//moved all API stuff to routes/routes.js
app.use(routes)






app.listen(port, () => console.log(`Example app listening on port ${port}!`))
