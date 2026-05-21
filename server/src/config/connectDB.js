const envConfig = require('./envConfig');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${envConfig.MONGODB_URI}/${envConfig.DB_NAME}`
    );
    console.log(`Database Connected ✅: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
