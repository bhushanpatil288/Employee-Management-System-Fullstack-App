const ApiResponse = require('../../utility/ApiResponse');
const asyncHandler = require('../../utility/asyncHandler');

const healthCheckController = asyncHandler(async (_, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, 'Server is online 🌐', null));
});

module.exports = { healthCheckController };
