class ApiError extends Error {
  constructor(statusCode, message = 'Something went wrong', data = null) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.data = data;
  }
}

module.exports = ApiError;
