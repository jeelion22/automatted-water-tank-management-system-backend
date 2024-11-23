// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../utils/config");
// const User = require("../models/user");

// const auth = {
//   isAuth: (req, res, next) => {
//     const token = req.cookies.token;

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized access" });
//     }

//     try {
//       const decodedToken = jwt.verify(token, JWT_SECRET);
//       req.userId = decodedToken.id;

//       next();
//     } catch (error) {
//       console.log(error);

//       if (error.name === "JsonWebTokenError") {
//         res.status(401).json({ message: "Invalid token" });
//       } else if (error.response) {
//         res.status(error.response.status).json({
//           message: error.response.data,
//         });
//       } else if (error.request) {
//         res.status(500).json({
//           message: error.request.data,
//         });
//       } else {
//         res.status(500).json({
//           message: "An unexpected error occurred",
//         });
//       }
//     }
//   },
// };

// module.exports = auth;
