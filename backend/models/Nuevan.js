// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const nuevanSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: String,
    // You can add specifics to each one too that help with validation, like making something required, or unique
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Add 'enum' of an array of options to force selection between a given number of options.
    // Anything other than "faculty", "staff" or "parent" will not be allowed
    // I am also setting a default to be faculty
    role: {
        type: String,
        enum: ["faculty", "staff", "parent", "student"],
        default: "faculty"
    },
    //here I am setting min/max for the number
    grade: {
      type: Number,
      min: 9,
      max: 12,
    },
});


module.exports = mongoose.model("Nuevan", nuevanSchema);
