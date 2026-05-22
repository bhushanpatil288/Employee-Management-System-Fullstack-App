const express = require('express');
const router = express.Router();
const { addEmployee, removeEmployee } = require('./employees.controller');

router.get('/add', addEmployee);
router.post('/remove', removeEmployee);

module.exports = router;
