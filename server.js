const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const passport = require("./config/passport");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );
  app.use(passport.initialize());
  app.use(passport.session());