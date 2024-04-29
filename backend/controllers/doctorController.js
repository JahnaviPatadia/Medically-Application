const getAllDoctor = asyncHandler(async (req, res) => {
  try {
    const response = await User.find({ role: "Doctor" });
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

const updateDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const {
      role,
      firstname,
      lastname,
      degree,
      specialization,
      experience,
      gender,
      phoneno,
    } = req.body;

    const response = await User.findByIdAndUpdate(doctorId, req?.body, {
      new: true,
    });

    if (response) {
      return res.json({ message: "Doctor Updated !!", code: 200 });
    } else {
      return res.json({ message: "Something went wrong !!!", code: 204 });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error" });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const response = await User.deleteOne({ _id: patientId });

    if (response) {
      return res.json({ message: "Patient Deleted !!", code: 200 });
    } else {
      return res.json({ message: "Something went wrong !!!", code: 204 });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error" });
  }
};
