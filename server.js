// require 
const express = require("express");
const path = require("path");
const api = require("./routes/apiRoutes");
const html = require("./routes/htmlRoutes")
const app = express();
// port
const PORT = process.env.PORT || 3002;

// app express ()
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// listener
app.listen(PORT, () =>
    console.log(`Ready on port ${PORT}`)
);