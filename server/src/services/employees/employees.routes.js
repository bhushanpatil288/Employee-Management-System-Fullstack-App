const express = require('express');
const router = express.Router();
const {
  addEmployee,
  removeEmployee,
  employeeList,
} = require('./employees.controller');

router.get('/list', employeeList);
router.post('/add', addEmployee);
router.delete('/remove/:id', removeEmployee);

module.exports = router;
