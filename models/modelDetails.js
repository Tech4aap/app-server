const mongoose = require("mongoose");

const modelDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    details: { type: Array, required: true},
    status: { type: Boolean, default: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("modelDetails", modelDetailsSchema);

