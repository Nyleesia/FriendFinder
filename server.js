// Get dependencies
const express = require ("express");
const path = require ("path");
const exphbs = require("express-handlebars");

const app = express(); //Initialize express

const PORT = process.env.PORT || 8080;

app.use(express.static("public")); // To use CSS and JS for the frontend

// Set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars with default
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen (PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`); // Logs when server is started
});
