const express = require("express");
const router = express.Router();

const { Login } = require("../controllers/AdminController");

router.post("/admin/log-in", Login);

module.exports = router;
