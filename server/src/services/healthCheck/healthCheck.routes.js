const express = require('express');
const router = express.Router();
const { healthCheckController } = require('./healthCheck.controller');

router.get('/', healthCheckController);

module.exports = router;
