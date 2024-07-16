const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/miniproject")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);
