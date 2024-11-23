require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const SERVER_PORT = process.env.SERVER_PORT;

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  MONGODB_URI,
  SERVER_PORT,
  JWT_SECRET,
};
