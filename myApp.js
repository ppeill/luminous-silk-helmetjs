
/** luminous-silk-helmetjs-exercises **/

const helmet = require("helmet");
const hidePoweredBy = require("hide-powered-by");
const frameguard = require("frameguard");
const xssFilter = require("x-xss-protection");
const noSniff = require("dont-sniff-mimetype");
const ieNoOoen = require("ienoopen");
const hsts = require("hsts");
const ninetyDaysInMilliseconds = 7776000;

var express = require("express"); // Do Not Edit
var app = express(); // Do Not Edit

// 

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());

app.use(noSniff());
app.use(helmet.ieNoOpen());

var ninetyDaysInSeconds = 90 * 24 * 60 * 60;
//var ninetyDaysInMilliseconds = 90 * 24 * 60 * 60 * 1000;

app.use(helmet.hsts({ maxAge: ninetyDaysInMilliseconds, force: true }));








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
});
