//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/pets-api', controller.allPets)  
    app.get('/pets-api/:id', controller.getPet)
    app.post('/pets-api', controller.addPet) 
    app.put('/pets-api/:id', controller.updPet)
    app.delete('/pets-api/:id', controller.remPet)
}
