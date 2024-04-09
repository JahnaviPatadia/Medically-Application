const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  role: {
    type: String,
    required: [true, "Please add the user role"],
  },
  firstname: {
    type: String,
    required: [true, "Please add the user first name"],
  },
  lastname: {
    type: String,
    required: [true, "Please add the user last name"],
  },
  email: {
    type: String,
    required: [true, "Please add the user email"],
    unique: [true, "Email address already taken"],
  },
  password: {
    type: String,
    required: [true, "Please add the user password"],
  },
  gender: {
    type: String,
    required: [true, "Please add the user gender"],
  },
  dateofbirth: {
    type: String,
    required: [true, "please add the user date of birth"],
  },
  phone: {
    type: String,
    required: [true, "Please add the user phone number"],
  },
  state: {
    type: String,
    required: [true, "Please add the user state"],
  },
  city: {
    type: String,
    required: [true, "Please add the user city"],
  },
  pincode: {
    type: String,
    required: [true, "Please add the user pincode"],
  },
  address: {
    type: String,
    required: [true, "Please add the user address"],
  },
  experience: {
    type: String,
    required: [true, "Please add the user experience"],
  },
  qualification: {
    type: String,
    required: [true, "Please add the user qualification"],
  },
  specialization: {
    type: String,
    required: [true, "Please add the user specialization"],
  },
});
