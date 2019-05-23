//MODULARIZATION WITH MODELS:
    const Pet = require("./models")

//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {

    allPets:function(req, res){
//        console.log(req.body, req.params);
        Pet.find({}, function(err, pets) {
//            console.log(err, pets);
            res.json({data: pets});
        }).sort('petType');
    },

    getPet:function(req, res) {
        console.log(req.body, req.params);
        Pet.findById(req.params.id, function(err, pet) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(pet);
            }
        })
    },

    addPet:function(req, res){
        console.log(req.body, req.params);
        Pet.create(req.body, function(err, pet) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(pet);
            }
        })
    },

    updPet:function(req, res) {
        console.log("Reached updPet", req.body, req.params);
        Pet.findByIdAndUpdate(req.params.id, req.body, 
            function(err, pet) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(pet);
                }
            })
    },

    remPet:function(req, res) {
        console.log(req.body, req.params);
        Pet.findByIdAndDelete(req.params.id, function(err, pet) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(pet);
            }
        })
    },



}
