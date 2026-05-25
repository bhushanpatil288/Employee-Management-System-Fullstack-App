const express = require('express');
const router = express.Router();
const {
  addEmployee,
  removeEmployee,
  employeeList,
  updateEmployee,
  employeeDetails,
} = require('./employees.controller');

router.get('/list', employeeList);
router.get('/list/:id', employeeDetails);
router.post('/add', addEmployee);
router.delete('/remove/:id', removeEmployee);
router.put("/update", updateEmployee);

module.exports = router;
