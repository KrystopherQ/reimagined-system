const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/departmentsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
