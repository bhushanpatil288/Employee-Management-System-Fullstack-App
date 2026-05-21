const envConfig = require('./src/config/envConfig');
const connectDB = require('./src/config/connectDB');

const app = require('./src/app');

connectDB().then(() => {
  app.listen(envConfig.PORT || 7070, () => {
    console.log(`Listening on 🌐 http://localhost:${envConfig.PORT || 7070}`);
  });
});
