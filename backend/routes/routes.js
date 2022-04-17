const express = require('express')
const router = express.Router()
const UserSchema = require('../models/User.js')
const Game = require('../models/Game.js')
const bcrypt = require('bcrypt');


//
// Handle User (player)
//
router.get('/users', (req, res) => {
    UserSchema.find({
    })
    //'then' happens if find is succesful
    .then(users => {
      console.log("succesfully got entire db!")
      console.log(users)
      res.json(users)
    })
    //if theres an error, 'catch' happens instead
    .catch(err => {
      console.error(err)
    })
})

//Read/get by id
// router.get('/:id', (req, res) => {
//     NuevanSchema.findById(req.params.id)
//     .then(nuevan => {
//       console.log("succesfully got one!")
//       console.log(nuevan)
//       res.json(nuevan)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// })


// Create a new User
router.post('/user', async (req, res) => {
  const body = req.body;
   if (!(body.name && body.password)) {
     console.log("no name or password")
     console.log(body)
     return res.status(400).send({ error: "Data not formatted properly" });
   }

   UserSchema.findOne({ name: body.name }, function(err, docs){
     console.log(docs)
    if (docs) {
        // user exists...
        console.log("user exists");
        console.log(body);
        return res.status(400).send({error: "user already exists"});
    }
    else{
      // creating a new mongoose doc from user data
      console.log("user saved")
      const user = new UserSchema(body);
      user.save();
      return res.send("user Saved");
    }
});



  //TODO: Get Hashing and stuff working
  // console.log("adding new player")
  // const body = req.body;
  //
  //  if (!(body.userName && body.password)) {
  //    console.log("missing something");
  //    console.log(body);
  //    return res.status(400).send({ error: "Data not formatted properly" });
  //  }
  //
  //  // creating a new mongoose doc from user data
  //  const user = new Player(body);
  //  // generate salt to hash password
  //  const salt = await bcrypt.genSalt(10);
  //  // now we set user password to hashed password
  //  user.password = await bcrypt.hash(user.password, salt);
  //  user.save().then((doc) => res.status(201).send(doc));
})

// Login

// login route
 router.post("/login", async (req, res) => {


   //TODO: GET HASHING WORKING
   // const body = req.body;
   // const user = await Player.findOne({ userName: body.userName });
   // if (user) {
   //   // check user password with hashed password stored in the database
   //   const validPassword = await bcrypt.compare(body.password, user.password);
   //   if (validPassword) {
   //     res.status(200).json({ message: "Valid password" });
   //   } else {
   //     res.status(400).json({ error: "Invalid Password" });
   //   }
   // } else {
   //   res.status(401).json({ error: "User does not exist" });
   // }
 });




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
