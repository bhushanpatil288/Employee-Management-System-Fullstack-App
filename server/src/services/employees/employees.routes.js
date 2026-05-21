const express = require('express');
const router = express.Router();
const { addEmployee } = require('./employees.controller');

router.get('/add', addEmployee);

module.exports = router;
