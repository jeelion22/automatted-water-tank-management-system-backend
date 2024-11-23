const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname required"],
    minLength: [3, "Firtname should be atleast 3 characters"],
    maxLength: [12, "Firstname should not exceed"],
  },
  lastname: {
    type: String,
    maxLength: [12, "Firstname should not exceed"],
  },

  email: {
    type: String,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: (prop) => `${prop.value} is not a valid email address`,
    },
  },

  passwordHash: {
    type: String,
    required: [true, "Pasword required"],
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const existingUser = await mongoose.models.User.findOne({
        email: this.email,
        phone: this.phone,
      });

      if (existingUser) {
        const err = new Error("User already exists");
        err.status = 400;
        return next(err);
      }

      next();
    } catch (error) {
      next(error);
    }
  } else next();
});

module.exports = mongoose.model("User", userSchema, "users");
