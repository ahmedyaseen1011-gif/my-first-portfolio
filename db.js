const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbUser:safyas10@cluster0.xzuxmzc.mongodb.net/?appName=Cluster0")
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ Connection error:", err));

module.exports = mongoose;