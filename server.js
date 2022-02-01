// require 
const express = require ("express");
const path = require ("path");
const api = require("./routes/apiRoutes");
const app = express();
// port
const PORT = process.env.PORT || 3002;

// app express ()
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// listener
app.listen(PORT, () =>
    console.log(`Ready on port ${PORT}`)
);