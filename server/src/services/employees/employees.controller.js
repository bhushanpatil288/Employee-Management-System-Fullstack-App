const ApiResponse = require('../../utility/ApiResponse');
const asyncHandler = require('../../utility/asyncHandler');
const ApiError = require('../../utility/ApiError');
const employeesModel = require('../../models/employees.model');
const { employeeSchema } = require('./employees.validation');

const addEmployee = asyncHandler(async (req, res) => {
  const parsed = employeeSchema.safeParse(req.body);

  if (!parsed.success) {
    return res
      .status(400)
      .json(new ApiError(400, 'Validation failed', parsed.error.issues[0].message));
  }

  const data = await employeesModel.create(parsed.data);

  return res.status(201).json(new ApiResponse(201, 'New employee added', data));
});

module.exports = { addEmployee };
