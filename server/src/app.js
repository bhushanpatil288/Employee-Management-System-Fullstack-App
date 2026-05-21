const express = require('express');
const cors = require('cors');
const errorHandler = require('./utility/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// routes

// health check routes 🧑‍⚕️
const healthCheckRouter = require('./services/healthCheck/healthCheck.routes');
app.use('/', healthCheckRouter);

// Employees routes 🧑‍🔧
const employeesController = require('./services/employees/employees.routes');
app.use('/employees', employeesController);

app.use(errorHandler);
module.exports = app;
