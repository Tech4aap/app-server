const mongoose = require("mongoose");

const YarnNameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    uid: { type: String, required: true, unique: true },
    profilePic: { type: String, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("YarnNmae", UserSchema);
