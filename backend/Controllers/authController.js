const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/User.Model");

5;
// SIGNUP
const register = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).send({ error: "please fill all the input fields" });
  }
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(422).send({ error: "Email already Exist" });
  } else if (password !== cpassword) {
    return res.status(422).send({ error: "password are not mathing" });
  }
  const new_user = new UserModel({
    name,
    email,
    phone,
    work,
    password,
    cpassword,
  });

  try {
    await new_user.save();
    res.status(201).send({ message: "registration successfull" });
  } catch (err) {
    res.status(500).send({ error: "Failed to regiter" });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const user = await UserModel.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
//       generate token 
      const token = await user.generateAuthToken();
// save token in cookie
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 9000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).send({ error: "Invalid credential pass" });
      } else {
        res.send({ message: "user login successfull" });
      }
    } else {
      res.status(400).send({ error: "Invalid credential" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  register,
  login,
};
