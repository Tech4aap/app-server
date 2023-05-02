const PDFDocument = require('pdfkit-table');
const { v4: uuidv4 } = require('uuid');
const Structure = require("../models/structrue");
const pdfData = require('../models/pdfData');



const router = require("express").Router();

async function getStructureOfData (){
  const structure = await Structure.find({status: true});
  const respones = structure.map(({ name, header, rows }) => ({ name, header,rows}));

  return respones;
}


router.get('/:id', async (req, res) =>{
  let fontBold = 'Courier-Bold';
  let id = req.params.id;
  
  
  try {
    // Document Creation
    const doc = new PDFDocument({
      size: "A4",
      margin: 10,
      layout: "portrait",
      info: {Title: `Report_${id}`},
    });
    // For the title and date
    generateTitle(doc, id);
    
    // For the table Structure
    const structure = await getStructureOfData();
    const respone = (await pdfData.find({name: id}))[0].data;

    // For Y axis Position
    let lastOne = 0;
    let startFrom = 120;

    // For the table temp data
    let previous = {};

    // For the table Structure and data
    structure.map((item,index) => {
      // for the table S.NO
      let header = [{ label: "", property: 'number', renderer: null, width: 10}];
      let data = [];
      const array = ["", ...item.rows];

      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        let temp = {}; 
        item.header.map((items) => {
          if(i == 0){
            header.push({ label: items.name, property: items.name, renderer: null, width : 565 / (item.header.length)})
          }else{
            if(items.name == "Title" || items.name == "Description" || items.name == "Categories"){
                temp[items.name] = element;
            }else{
              let dataToFIle = "";
              switch (item.name) {
                case "Basic Information":
                  dataToFIle = respone["basicInformation"][i-1]["param"];
                  temp[items.name] = dataToFIle;
                  break;
                case "Product Information":
                  break;
                case "":
                  dataToFIle = respone["basicInformation"][i-1]["param"];
                  break;

              }

            }
          }
        });
        if(i != 0){
          temp["number"] = i;
          data.push(temp);
        }
      }

      // For the last row of the table
      if(item.name == "Basic Information" && respone["basicInformation"][respone["basicInformation"].length - 1]["param"] == ""){
        data.pop();
      }else if(item.name == "Product Information"){
        let yarns = previous["Basic Information"][4];
        let yarnInfo = null;
        for (let i = 0; i < yarns; i++) {
          yarnInfo = respone["productInformation"]["productInformationList"][i];
          data.push({
            "number": data.length + 1,
            "Title": yarnInfo["selectType"],
            "Rate(lbs)": yarnInfo["param1"],
            "Rate(Kg)": yarnInfo["ratekg"],
            "Percentage": yarnInfo["param1"],
            "Total per Kg": yarnInfo["totalperkg"],
          });
        }
      }

      const table = {
        title:  { label: `${1+index}. ${item.name}`, fontFamily: fontBold },
        headers: header,    
        datas: data,
      };
      
      previous[item.name] = data;
      lastOne += ((data.length + 1) * 20);
      
      if((startFrom + lastOne) > doc.page.height){
        doc.addPage();
        startFrom = 10;
      }



      doc.table(table, {
        y: startFrom,
        padding: [10, 10, 10, 10],
        
      });

      startFrom += lastOne;
      lastOne = 0;
    });

  
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
    });

    doc.pipe(res); 
    doc.end();
   

  } catch (err) {
    res.status(500).json(err);
  }
});

// Top header of the document
function generateTitle(doc, id) {
  let fontBold = 'Courier-Bold';
  
  // Image of logo on the top rigth of the document with width and height
  doc.image('./logo.png', 500, 15, {fit: [77, 70], align: 'center', valign: 'center'})
  
  // Main title of the document on the top center of the document
  doc.font(fontBold).fontSize(35).text('PSCC REPORT', 7, 80,{align:'center'});
  doc.fontSize(10).text('Pre Sales Cost Calculator', 7, 120,{align:'center'});
  
  // Details of the document on the top left of the document
  doc.font(fontBold).fontSize(8).text(`Id: ${id}`, 7, 30, {align:'left'});
  doc.font(fontBold).fontSize(8).text(`Link: ${id}`, 7, 40, {align:'left'});
  doc.font(fontBold).fontSize(8).text(`Date: ${(new Date()).toString()}`, 7, 50, {align:'left'});
}


router.post("/", async (req, res) => {
  const name = uuidv4();
  const respones = new pdfData({name:name, data: req.body});

  try {
    await respones.save();
    console.log(name);
    res.status(200).json({suucess: true, data: name, message: "Data saved successfully"});
  } catch (err) {
    res.status(500).json({suucess: false, message: "Data not saved successfully"});
  }
});


router.get("/", async (req, res) => {
  try {
    const models = await pdfData.find({status: true});
    res.status(200).json(models);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const models = await pdfData.find({name: req.params.id});
    res.status(200).json(models);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;