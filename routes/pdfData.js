const PDFDocument = require('pdfkit-table');
const { v4: uuidv4 } = require('uuid');
const Structure = require("../models/structrue");



const router = require("express").Router();

async function getStructureOfData (){
  const structure = await Structure.find({status: true});
  const respones = structure.map(({ name, header, rows }) => ({ name, header,rows}));

  return respones;
}


router.get('/', async (req, res) =>{
  let fontBold = 'Courier-Bold';
  let id = uuidv4();
  
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

    // For 
    let lastOne = 0;
    let startFrom = 120;

    structure.map((item,index) => {
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

            temp[items.name] = element;
          }
        });
        if(i != 0){
          temp["number"] = i;
          data.push(temp);
        }
      }

      const table = {
        title:  { label: `${1+index}. ${item.name}`, fontFamily: fontBold },
        headers: header,    
        datas: data,
        // widths: width,
      };
      
      
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

  
    doc.pipe(res); 
    doc.end();
   
    // res.writeHead(200, {
    //   'Content-Type': 'application/pdf',
    // });

  } catch (err) {
    res.status(500).json(err);
  }
});

function tableHeader(data){
  let header = [{ label: "", property: 'number', renderer: null }];
  data.map((item) => {
    header.push({ label: item.name, property: item.type, renderer: null, })
  })
  return header;
}


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
  const model = new ModelDetails(req.body);

  try {
    const savedModel = await model.save();
    res.status(200).json(savedModel);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;