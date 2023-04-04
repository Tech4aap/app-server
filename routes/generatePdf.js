const router = require("express").Router();
const PDFDocument = require('pdfkit-table');


router.get('/6969' ,async (req, res) => {
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


  function generateHeader(doc) {
    let fontBold = 'Helvetica-Bold';
    doc.image('./images/logo.png', 500, 15, {fit: [70, 70], align: 'center', valign:
  'center'})
  doc.font(fontBold).fontSize(35).text('PSCC REPORT', 7, 80,{align:'center'});
  doc.fontSize(10).text('Pre Sales Cost Calculator', 7, 120,{align:'center'});
  }
});
