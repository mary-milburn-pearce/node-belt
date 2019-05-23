////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/pets_db');
    var PetSchema = new mongoose.Schema({
        petName: {type: String, required: true, minlength: [3, "Pet name must be at least 3 characters long"]},
        petType: {type: String, required: true, minlength: [3, "Pet type must be at least 3 characters long"]},
        description: {type: String, required: true, minlength: [3, "Pet description must be at least 3 characters long"]},
        skillOne: {type: String, required: false},
        skillTwo: {type: String, required: false},
        skillThree: {type: String, required: false},
        likes: {type: Number, required: false, default: 0}
    }, {timestamps: true});
    mongoose.model('Pet', PetSchema); 
    var Pet = mongoose.model('Pet');

    ////Export Pet so Controllers has access to it
    module.exports = Pet;