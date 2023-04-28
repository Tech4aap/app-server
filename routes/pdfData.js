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
    const doc = new PDFDocument({
      size: "A4",
      margin: 10,
      layout: "portrait",

      info: {
        Title: `Report_${id}`,
      },
      
    });
    
    generateHeader(doc, id);
    const structure = await getStructureOfData();

    structure.map((item,index) => {
      let header = [{ label: "", property: 'number', renderer: null }];
      let tableModel = {"":""};

      item.header.map((items) => {
        header.push({ label: items.name, property: items.type, renderer: null, });
        tableModel[items.name] = "";
      });

      let data = [{
        "": 1
      }];

      item.rows.map((items) => {
        console.log(tableModel);
        console.log(tableModel);
        // data.push();
      });

      const table = {
        title:  { label: `${1+index}. ${item.name}`, fontFamily: fontBold },
        headers: header,    
        datas: [
          {
            "number": 1,
            "text":"sassa",
            "": "Sasssa"
          }
        ],
      };
  
      // the magic
      doc.table(table, {
        
        // columnsSize: [50, 250, 280],
        // padding: [10, 10, 10, 10]
      });


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

function generateHeader(doc, id) {
  let fontBold = 'Courier-Bold';
  doc.image('./logo.png', 500, 15, {fit: [77, 70], align: 'center', valign: 'center'})
  doc.font(fontBold).fontSize(35).text('PSCC REPORT', 7, 80,{align:'center'});
  doc.font(fontBold).fontSize(8).text(`id: ${id}`, 7, 40, {align:'left'});
  doc.font(fontBold).fontSize(8).text(`Link: ${id}`, 7, 50, {align:'left'});
  doc.fontSize(10).text('Pre Sales Cost Calculator', 7, 120,{align:'center'});
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