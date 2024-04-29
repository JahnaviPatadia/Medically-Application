const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const Login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      console.log("message");
      const accessToken = jwt.sign(
        {
          user: { email: user.email, password: user.password },
        },

        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      console.log(accessToken);
      return res.json({
        message: "Login Successfully",
        data: { accessToken },
        code: 200,
      });
    } else {
      return res.json({ message: "Something Went Wrong", code: 400 });
    }
  } catch (error) {
    return res.json({ message: "Internal Server Error", error });
  }
});

module.exports = { Login };