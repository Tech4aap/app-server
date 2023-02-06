const mongoose = require("mongoose");

const reportDetailsSchema = new mongoose.Schema(
  {
    refId: { type: String, required: true},
    details: { type: Array, required: true},
    status: { type: Boolean, default: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("reportDetails", reportDetailsSchema);
