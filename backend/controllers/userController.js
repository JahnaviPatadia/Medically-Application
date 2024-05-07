const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// @DESC: SingUp User | @Access - Public | Route: /api/sign-up
const signUp = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    role,
    email,
    password,
    dob,
    phoneno,
    gender,
    state,
    city,
    pincode,
    address,
    degree,
    userStatus,
    experience,
    qualification,
    specialization,
  } = req.body;

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    role,
    firstname,
    lastname,
    email,
    password: hashedPassword,
    dob,
    phoneno,
    gender,
    state,
    city,
    pincode,
    address,
    degree,
    userStatus,
    experience,
    qualification,
    specialization,
  });

  if (user) {
    res.json({ message: "User Created !!", data: user, code: 200 });
  } else {
    res.json({ message: "User data is not valid" });
    throw new Error("User data is not valid");
  }
});

// @DESC: SingIn User | @Access - Public | Route: /api/sign-in
const singIn = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: { username: user.username, email: user.email, id: user.id },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      return res.json({
        message: "Login Successfully",
        data: { accessToken },
        code: 200,
      });
    } else {
      return res.json({ message: "Something Went Wrong", code: 400 });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error" });
  }
});

const getAllUser = asyncHandler(async (req, res) => {
  try {
    const response = await User.find();

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

const getSingleUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await User.findById(userId);

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
    return res.json({ message: "Internal Server Error" });
  }
});

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

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    // here all string filter
    const role = req.query.role;
    const search = req.query.search || "";

    let query = {};

    if (role !== undefined && role !== null && role !== "") {
      query = { ...query, role };
    }

    const totalUser = await User.countDocuments({
      firstname: { $regex: search, $options: "i" },
    });

    console.log(totalUser);
    const totalPages = Math.ceil(totalUser / limit);
    const user = await User.find({
      firstname: { $regex: search, $options: "i" },
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.json({
      message: "Successfully GET !!",
      data: user,
      pagination: {
        totalPages,
        currentPage: page,
        totalUser,
      },
      code: 200,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error" });
  }
});

// const getUsers = asyncHandler(async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 6;
//     const skip = (page - 1) * limit;

//     const role = req.query.role;
//     const search = req.query.search || "";

//     let query = {};

//     if (role !== undefined && role !== null && role !== "") {
//       query = { ...query, role };
//     }

//     console.log("this is query", query);

//     const totalUser = await User.countDocuments({
//       firstname: { $regex: search, $options: "i" },
//     });

//     const totalPages = Math.ceil(totalUser / limit);
//     const user = await User.find()
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limit);

//     console.log(user);

//     return res.json({
//       message: "Successfully GET !!",
//       data: user,
//       pagination: {
//         totalPages,
//         currentPage: page,
//         totalUser,
//       },
//       code: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.json({ message: "Internal Server Error" });
//   }
// });

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const role = req.query.role;
    const search = req.query.search || "";
    const status = req.query.status || "";

    let query = {};
    if (role) {
      query.role = role;
    }

    if (status) {
      query.userStatus = status;
    }

    query.$or = [
      { firstname: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];

    const totalUser = await User.countDocuments(query);

    const totalPages = Math.ceil(totalUser / limit);

    const user = await User.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    console.log(user);
    if (user) {
      return res.json({
        message: "Successfully GET !!",
        data: user,
        pagination: {
          totalPages,
          currentPage: page,
          totalUser,
        },
        code: 200,
      });
    } else {
      return res.json({ message: "Something went wrong !!", code: 400 });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  signUp,
  singIn,
  getAllUser,
  updatePatient,
  deletePatient,
  getSingleUser,
  getAllPatient,
  updateDoctor,
  getAllDoctor,
  getAllUsers,
  getUsers,
};
