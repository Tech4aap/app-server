require("dotenv").config();

const express = require('express');

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGDB_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})


app.use("/api/yarns", require("./routes/yarn"));
app.use("/api/product", require("./routes/product"));
app.use("/api/report", require("./routes/reportConstant"));
app.use("/api/details/", require("./routes/reportDetails"));
app.use("/api/create/", require("./routes/report"));
app.use("/api/pdf/", require("./routes/pdf"));



app.listen(process.env.PORT || 6969, () => {
    console.log("Backend server is running on: " + process.env.PORT || 6969);
  });
  