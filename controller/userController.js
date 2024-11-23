const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const userController = {
  register: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;

      let passwordHash = await bcrypt.hash(password, 10);

      const newUser = new User({ firstname, lastname, email, passwordHash });
      await newUser.save();

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      if (error.status === 400) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.passwordHash
      );

      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(Date.now() + 24 * 3600 * 1000),
      });

      res.status(200).json({ message: "Logged successfully" });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  me: async (req, res) => {
    try {
      const userId = req.userId;

      const user = await User.findById(userId).select(
        "-__v -passwordHash -_id"
      );

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },
};

module.exports = userController;
