const { Router } = require("express");
const { register, login } = require("../Controllers/authController");


const AuthRouter = Router();

AuthRouter.get("/", (req, res) => {
  res.send("hello world");
});

AuthRouter.post("/register",register)

AuthRouter.post("/login", login)

module.exports = {
  AuthRouter,
};
