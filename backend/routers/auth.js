const { Router } = require("express");

const AuthRouter = Router();

AuthRouter.get("/", (req, res) => {
  res.send("hello world");
});

AuthRouter.post("/register", async(req, res) => {
  console.log(req.body);
  res.json({message:req.body})
  // res.send("register form submitted successfully");
});

module.exports = {
  AuthRouter,
};
