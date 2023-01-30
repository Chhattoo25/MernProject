const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength:3
  },
  email: {
    type: String,
    required: true,
    
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  console.log("hi from inside model");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
    this.cpassword = await bcrypt.hash(this.cpassword, 8);
  }
  next();
});

// we are genrating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenca = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
  this.tokens = this.tokens.concat({token:tokenca})
  await this.save()
  return tokenca
  } catch (err) {
    console.log(err);
  }
};
const UserModel = new mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
