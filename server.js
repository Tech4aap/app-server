require("dotenv").config();

const express = require('express');

const mongoose = require("mongoose");
const cors = require("cors");
const PDFDocument = require('pdfkit-table');

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
    res.status(200).json("v1");
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

app.get('/new', async (req, res) =>{
  try {

    const doc = new PDFDocument({});

    // generateHeader(doc);
    // // const table = 
    
    const table = {
      title: "1. BASIC INFORMATION",
      
      headers: [
        { label: "Id", property: 'number', width: 20, renderer: null },
        { label: "Name", property: 'name', width: 280, renderer: null },
        { label: "Description", property: 'description', width: 280, renderer: null },      
      ],
      // complex data
      datas: [
        { 
          number: 1,
          name: 'Employee Name', 
          description: 'Hassan', 
        },
      ],
      // simeple data
      
    };
    // the magic
    doc.table(table, {
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
  
    });
  
    doc.pipe(res); 
   
    doc.end();
   
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

app.use("/api/yarns", require("./routes/yarn"));
app.use("/api/product", require("./routes/product"));
app.use("/api/report", require("./routes/reportConstant"));
app.use("/api/details/", require("./routes/reportDetails"));
// app.use("/api/new/", require("./routes/report"));
// app.use("/api/pdf/", require("./routes/pdf"));




app.listen(process.env.PORT || 6969, () => {
    console.log("Backend server is running on: " + process.env.PORT || 6969);
  });
  