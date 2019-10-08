// Get dependencies
const express = require ("express");
const path = require ("path");
const bodyParser = require("body-parser");

const app = express(); //Initialize express
const PORT = process.env.PORT || 8080;


// Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("../app/public")); // To use CSS and JS for the frontend

// Import routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen (PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`); // Logs when server is started
});
