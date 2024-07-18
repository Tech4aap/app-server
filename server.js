require("dotenv").config();

const express = require('express');

const mongoose = require("mongoose");
const cors = require("cors");



const app = express();

const appDetails = {version :"v1", name: "PSC Calculator", author: "Muhammad Fahad"};


mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGDB_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


app.use(cors());
app.use(express.json());

app.get('/', async (req, res) =>{
  try {
    res.status(200).json({ "version": 0.1 });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/version_:v', async (req, res) =>{
  try {
    appDetails.version = req.params.v;
    res.status(200).json(appDetails.version);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.use("/api/structure", require("./routes/Structure"));
app.use("/api/generatePdf", require("./routes/pdfData"));



app.use("/api/yarns", require("./routes/yarn"));
app.use("/api/product", require("./routes/product"));
app.use("/api/report", require("./routes/reportConstant"));
app.use("/api/details/", require("./routes/reportDetails"));





app.listen(process.env.PORT || 6969, () => {
    console.log("Backend server is running on: " + process.env.PORT || 6969);
  });
  