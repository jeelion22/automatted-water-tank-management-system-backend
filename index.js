const app = require("./app");
const config = require("./utils/config");
const mongoose = require("mongoose");

console.log("Connecting to MongoDB...");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // const PORT = config.SERVER_PORT || 5000;
    app.listen(3001, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Error connecting to MongoDB", error.message));
