const express = require('express');
const cors = require('cors');
const errorHandler = require('../utility/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// routes

// health check 🧑‍⚕️
const healthCheckRouter = require("../services/healthCheck/healthCheck.routes");
app.use("/", healthCheckRouter);

app.use(errorHandler);
module.exports = app;
