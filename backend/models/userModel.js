const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  role: {
    type: String,
    required: [true, "Please add the user role"],
    enum: ["Patient", "Doctor", "Admin"],
  },
  firstname: {
    type: String,
    //required: [true, "Please add the user first name"],
  },
  lastname: {
    type: String,
    //required: [true, "Please add the user last name"],
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
    //required: [true, "Please add the user gender"],
  },

  phoneno: {
    type: String,
    //required: [true, "Please add the user phone number"],
  },
  dob: {
    type: String,
    //required: [true, "Please add the user date of birth"],
  },
  state: {
    type: String,
    //required: [true, "Please add the user state"],
  },
  city: {
    type: String,
    //required: [true, "Please add the use city"],
  },
  pincode: {
    type: String,
    //required: [true, "Please add the user pincode"],
  },
  address: {
    type: String,
    //required: [true, "Please add the user address"],
  },
  experience: {
    type: String,
    //required: [true, "Please add the user experience"],
  },
  degree: {
    type: String,
    //required: [true, "Please add the user degree"],
  },
  qualification: {
    type: String,
    //required: [true, "Please add the user qualification"],
  },
  specialization: {
    type: String,
    //required: [true, "Please add the user specialization"],
  },
  userStatus: {
    type: String,
    enum: ["Active", "Inactive"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
