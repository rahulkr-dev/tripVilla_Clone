const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = model("UserTripVilla", UserSchema);

module.exports = UserModel;
