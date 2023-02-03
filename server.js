const express = require('express');

const dotenv  = require('dotenv');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGDB_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

mongoose.set('strictQuery', false);

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT || 6969, () => {
    console.log("Backend server is running on: " + process.env.PORT || 6969);
  });
  