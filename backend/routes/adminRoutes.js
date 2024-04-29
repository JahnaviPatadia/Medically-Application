const express = require("express");
const router = express.Router();

const { Login } = require("../controllers/adminController");

router.post("/admin/log-in", Login);

module.exports = router;
