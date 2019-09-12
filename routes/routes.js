
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", userController.create);
router.post("/users/sign_in", userController.signIn);

module.exports = router;