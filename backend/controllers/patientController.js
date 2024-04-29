const User = require("../models/userModel");

const updatePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const { role, firstname, lastname, email, password, gender, phoneno } =
      req.body;

    const response = await User.findByIdAndUpdate(patientId, req?.body, {
      new: true,
    });
    if (response) {
      return res.json({ message: "Patient Updated !!", code: 200 });
    } else {
      return res.json({ message: "Something went wrong !!!", code: 204 });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error" });
  }
};

const getAllPatient = asyncHandler(async (req, res) => {
  try {
    const response = await User.find({ role: "Patient" });
    if (response) {
      return res.json({
        message: "Successfully GET !!",
        data: response,
        code: 200,
      });
    } else {
      return res.json({ message: "Something went wrong !!!", code: 204 });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error" });
  }
});

const deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const response = await User.deleteOne({ _id: patientId });

    if (response) {
      return res.json({ message: "Patient Deleted !!", code: 200 });
    } else {
      return res.json({ message: "Something went wrong !!", code: 204 });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error !!" });
  }
};
