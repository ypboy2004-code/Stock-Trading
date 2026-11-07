
const {
  Signup,
  Logout,
  GetMe
} = require("../Controllers/AuthController");

const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = require("express").Router();

router.post("/signup", Signup);

router.post("/logout", Logout);

router.get("/me", AuthMiddleware, GetMe);

module.exports = router;
