const express = require('express')
const router = express.Router()
const NuevanSchema = require('../models/Nuevan.js')

router.get('/', (req, res) => {
    NuevanSchema.find({
    })
    //'then' happens if find is succesful
    .then(nuevans => {
      console.log("succesfully got entire db!")
      console.log(nuevans)
      res.json(nuevans)
    })
    //if theres an error, 'catch' happens instead
    .catch(err => {
      console.error(err)
    })
})

//Read/get by id
router.get('/:id', (req, res) => {
    NuevanSchema.findById(req.params.id)
    .then(nuevan => {
      console.log("succesfully got one!")
      console.log(nuevan)
      res.json(nuevan)
    })
    .catch(err => {
      console.error(err)
    })
})


//we will be using the '/add' to do a POST request
router.post('/add', (req, res) => {
    // TODO:
    // Create:
    // Create a Model using our NuevanSchema Model
    // https://mongoosejs.com/docs/api/model.html#model_Model.create

    // be sure to add a .then() and .catch() after
})

//TODO: change '/' below to be by id
router.put('/', (req, res) => {
    // TODO:
    // Update:
    // Update a Model using our NuevanSchema Model
    // https://mongoosejs.com/docs/api/model.html
    // which of the methods in the link above ^ could be useful?

    // be sure to add a .then() and .catch() after
})

//TODO: change '/' below to be by id
router.delete('/', (req, res) => {
    // TODO:
    // Delete:
    // Delete a Model using our NuevanSchema Model
    // https://mongoosejs.com/docs/api/model.html
    // which of the methods in the link above ^ could be useful?

    // be sure to add a .then() and .catch() after
})

module.exports = router
