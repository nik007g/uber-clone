// to configure environment variable
const dotenv = require('dotenv');
dotenv.config();

// imported express
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = app;