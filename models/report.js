const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true},
    employeeName: { type: String, required: true},
    productType: { type: String, required: true},
    productDesc: { type: String, required: true},
    stockInfo: { type: String, required: true},
    reportDate: { type: String, required: true},
    isCurrency: { type: Boolean, default: true },
    currencySymbol: { type: String, default: true },
    currencyExchange: { type: String, default: true },

    ids: { type:Array, required: true},

    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("report", reportSchema);
