onst helmet = require("helmet");
const hidePoweredBy = require ('hide-powered-by');
const frameguard = require ('frameguard');
var express = require("express"); // Do Not Edit
var app = express(); // Do Not Edit



app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));
