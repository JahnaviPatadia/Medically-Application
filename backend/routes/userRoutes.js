const express = require("express");
const router = express.Router();
const {
  signUp,
  singIn,
  getAllUser,
  updatePatient,
  updateDoctor,
  deletePatient,
  getSingleUser,
  getAllPatient,
  getAllDoctor,
  getAllUsers,
} = require("../controllers/userController");

// User Login
router.post("/sign-in", singIn);

router.post("/sign-up", signUp);

router.put("/user/patient/:id", updatePatient);

router.get("/user/doctor/:id", getSingleUser);

router.put("/user/doctor/:id", updateDoctor);

router.delete("/user/patient/:id", deletePatient);

router.get("/user/patient/:id", getSingleUser);

router.get("/user/patient", getAllUser);

router.get("/user/patient/all", getAllPatient);

router.get("/user/doctor", getAllDoctor);

router.get("/users", getAllUsers);

module.exports = router;
