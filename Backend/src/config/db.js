const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const connect = () => {
  mongoose.set('strictQuery', true);
  return mongoose.connect(process.env.MOGODBCONNECTION);
};
module.exports = connect;
