const express = require("express");
const cors = require("cors");
const app = express();

const allRoute = require('./routes/routes')

app.use(cors());

app.use("/", allRoute);

module.exports = app;