const mongoose = require("mongoose");

const modelDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    header: { type: Array, required: true},
    rows: { type: Array, required: true},
    status: { type: Boolean, default: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("structure", modelDetailsSchema);

