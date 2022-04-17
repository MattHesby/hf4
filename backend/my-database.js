const mongoose = require('mongoose');
// const userModel = require('./models/player')

const server = '127.0.0.1:27017';
const database = 'hf4';      // Since we made our schema into a model, this should be created

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(dbSuccess())
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

function dbSuccess(){
  console.log('Database connection successful')
}

//creates a new database object
//which calls _connect()
module.exports = new Database()
