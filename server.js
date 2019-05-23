//REQUIRE STATMENTS
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//APP CONFIGURATION
app.use(bodyParser.json());

//HOOK UP TO ANGULAR
app.use(express.static(__dirname + '/public/dist/public'));

//ROUTES
require('./server/routes')(app)

// From Dojo platform: this route will be triggered if any of the routes above did not match
// not sure it's needed, so comment out for now.
// app.all("*", (req,res,next) => {
//     res.sendFile(path.resolve("./public/dist/public/index.html"))
//   });

//SERVER LISTEN
app.listen(8000, function(){
    console.log("Listening on post 8000")
});