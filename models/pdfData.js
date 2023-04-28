const mongoose = require("mongoose");

const modelDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    data: { type: Object, required: true},
    status: { type: Boolean, default: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("pdfData", modelDetailsSchema);

