const helmet = require("helmet");
const hidePoweredBy = require ('hide-powered-by');
const frameguard = require ('frameguard');
var express = require("express"); // Do Not Edit
var app = express(); // Do Not Edit

// ----

/** - Challenges - *



app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));


var ninetyDaysInSeconds = 90 * 24 * 60 * 60;


// ---- DO NOT EDIT BELOW THIS LINE ---------------------------------------

module.exports = app;
var api = require("./server.js");
app.use(express.static("public"));
app.disable("strict-transport-security");
app.use("/_api", api);
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
var listener = app.listen(process.env.PORT || 3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
