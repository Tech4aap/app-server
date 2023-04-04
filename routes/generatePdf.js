const router = require("express").Router();



router.get('/6969' ,async (req, res, next) => {
  const PDFDocument = require('pdfkit-table');
  const doc = new PDFDocument({});

  generateHeader(doc);
  // const table = 
  
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
      { 
        number: 1,
        name: 'Employee Name', 
        description: 'Hassan', 
      }
      ,
      { 
        number: 1,
        name: 'Employee Name', 
        description: 'Hassan', 
      },
      { 
        number: 1,
        name: 'Employee Name', 
        description: 'Hassan', 
      },
      { 
        number: 1,
        name: 'Employee Name', 
        description: 'Hassan', 
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });


  const table2 = {
    title: "2. PRODUCT INFORMATION (2)",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Yarn name", property: 'yarn_name', width: 230, renderer: null },
      { label: "Yarn Rate(lbs)", property: 'yarn_rate', width: 80, renderer: null },
      { label: "Yarn Price(Kg)	", property: 'yarn_price', width: 80, renderer: null },     
      { label: "Percentage", property: 'Percentage', width: 80, renderer: null },    
      { label: "Total per Yarn Cost(Kg)", property: 'total_cost', width: 90, renderer: null },      
    ],
    // complex data
    datas: [
      { 
        number: 1,
        yarn_name: '10/S Organic R/S', 
        yarn_rate: '200', 
        yarn_price: '440.92', 
        Percentage: '20 %', 
        total_cost: '88.18',  
      },
      { 
        number: 1,
        yarn_name: '10/S Organic R/S', 
        yarn_rate: '200', 
        yarn_price: '440.92', 
        Percentage: '20 %', 
        total_cost: '88.18',  
      },{ 
        number: 1,
        yarn_name: '10/S Organic R/S', 
        yarn_rate: '200', 
        yarn_price: '440.92', 
        Percentage: '20 %', 
        total_cost: '88.18',  
      },
      { 
        number: 1,
        yarn_name: '10/S Organic R/S', 
        yarn_rate: '200', 
        yarn_price: '440.92', 
        Percentage: '20 %', 
        total_cost: '88.18',  
      },{ 
        number: 1,
        yarn_name: '10/S Organic R/S', 
        yarn_rate: '200', 
        yarn_price: '440.92', 
        Percentage: '20 %', 
        total_cost: '88.18',  
      },
      { 
        number: 1,
        yarn_name: '10/S Organic R/S', 
        yarn_rate: '200', 
        yarn_price: '440.92', 
        Percentage: '20 %', 
        total_cost: '88.18',  
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table2, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });


  const table3 = {
    title: "3. PER PIECE INFORMATION (3)",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Yarn name", property: 'categories', width: 280, renderer: null },
      { label: "Yarn Rate(lbs)", property: 'cat_values', width: 280, renderer: null },     
    ],
    // complex data
    datas: [
      { 
        number: 1,
        categories: 'Per piece GSM & Spec Information', 
        cat_values: '50', 
      },
      { 
        number: 1,
        categories: 'Per piece GSM & Spec Information', 
        cat_values: '50', 
      },
      { 
        number: 1,
        categories: 'Per piece GSM & Spec Information', 
        cat_values: '50', 
      }
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table3, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });

  const table4 = {
    title: "4. PRODUCT WASTAGES",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Categories", property: 'categories', width: 280, renderer: null },
      { label: "Percentages", property: 'percentages', width: 140, renderer: null },     
      { label: "Cost", property: 'cost', width: 140, renderer: null },     
    ],
    // complex data
    datas: [
      { 
        number: 1,
        categories: 'Per piece GSM & Spec Information', 
        percentages: '50%',
        cost: '44.09'
      },
      { 
        number: 1,
        categories: 'Per piece GSM & Spec Information', 
        percentages: '50%',
        cost: '44.09'
      },
      { 
        number: 1,
        categories: 'Per piece GSM & Spec Information', 
        percentages: '50%',
        cost: '44.09'
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table4, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });


  const table5 = {
    title: "5. FABRIC COST INFORMATION",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Categories", property: 'categories', width: 280, renderer: null },
      { label: "Price", property: 'price', width: 280, renderer: null },      
    ],
    // complex data
    datas: [
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        price: '440.92',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        price: '440.92',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        price: '440.92',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        price: '440.92',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        price: '440.92',
      }
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table5, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });


  const table6 = {
    title: "6.1 CMT COST (WITHOUT PACKING)",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Categories", property: 'categories', width: 280, renderer: null },
      { label: "Per PC(0.6 gram)", property: 'perPc', width: 140, renderer: null },
      { label: "Per Kg(1666.67 Piece)", property: 'perkg', width: 140, renderer: null },      
    ],
    // complex data
    datas: [
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      { 
        number: 1,
        categories: 'Total Yarn Cost', 
        perPc: '0.39',
        perkg: '641.69',
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table6, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });


  const table7 = {
    title: "6.2. OTHER CMT COST",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Categories", property: 'categories', width: 280, renderer: null },
      { label: "Per Pack Cost(25 Piece)", property: 'perPackCost', width: 280, renderer: null },      
    ],
    // complex data
    datas: [
      { 
        number: 1,
        categories: 'TagPin', 
        perPackCost: '25',
      },
      { 
        number: 1,
        categories: 'TagPin', 
        perPackCost: '25',
      },
      { 
        number: 1,
        categories: 'TagPin', 
        perPackCost: '25',
      },
      { 
        number: 1,
        categories: 'TagPin', 
        perPackCost: '25',
      },
      { 
        number: 1,
        categories: 'TagPin', 
        perPackCost: '25',
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table7, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });

  const table8 = {
    title: "7. VARIABLE COST",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Categories", property: 'categories', width: 280, renderer: null },
      { label: "Percentages", property: 'percentages', width: 93, renderer: null },
      { label: "Per PC", property: 'perPc', width: 93, renderer: null },      
      { label: "Per Kg", property: 'perkg', width: 93, renderer: null },      
    ],
    // complex data
    datas: [
      { 
        number: 1,
        categories: 'ToP / PP Sample', 
        percentages: '20%',
        perPc: '42.08',
        perkg: '70128.48',
      },
      { 
        number: 1,
        categories: 'ToP / PP Sample', 
        percentages: '20%',
        perPc: '42.08',
        perkg: '70128.48',
      },
      { 
        number: 1,
        categories: 'ToP / PP Sample', 
        percentages: '20%',
        perPc: '42.08',
        perkg: '70128.48',
      },
      { 
        number: 1,
        categories: 'ToP / PP Sample', 
        percentages: '20%',
        perPc: '42.08',
        perkg: '70128.48',
      },
      { 
        number: 1,
        categories: 'ToP / PP Sample', 
        percentages: '20%',
        perPc: '42.08',
        perkg: '70128.48',
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table8, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });


  const table9 = {
    title: "FINANCE / OPERATING / GP",
    
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Categories", property: 'categories', width: 280, renderer: null },
      { label: "Percentages", property: 'percentages', width: 93, renderer: null },
      { label: "Per PC", property: 'perPc', width: 93, renderer: null },      
      { label: "Per Kg", property: 'perkg', width: 93, renderer: null },      
    ],
    // complex data
    datas: [
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      { 
        number: 1,
        categories: 'Export Tax', 
        percentages: '20%',
        perPc: '67.33',
        perkg: '112205.57',
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table9, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),

  });


  const table10 = {
    title: "10. FINAL PRICE FOR CUSTOMER",
    headers: [
      { label: "Id", property: 'number', width: 20, renderer: null },
      { label: "Title", property: 'title', width: 280, renderer: null },
      { label: "Per PC", property: 'perPc', width: 93, renderer: null },      
      { label: "Per Kg", property: 'perkg', width: 93, renderer: null },     
      { label: "Per Pack", property: 'perPack', width: 93, renderer: null }, 
    ],
    // complex data
    datas: [
      { 
        number: 1,
        title: 'Cost in PKR', 
        perPc: '1381.59',
        perkg: '2302458.27',
        perPack: '34739.75',
      },
      { 
        number: 1,
        title: 'Cost in PKR', 
        perPc: '1381.59',
        perkg: '2302458.27',
        perPack: '34739.75',
      },
      { 
        number: 1,
        title: 'Cost in PKR', 
        perPc: '1381.59',
        perkg: '2302458.27',
        perPack: '34739.75',
      },
      { 
        number: 1,
        title: 'Cost in PKR', 
        perPc: '1381.59',
        perkg: '2302458.27',
        perPack: '34739.75',
      },
      { 
        number: 1,
        title: 'Cost in PKR', 
        perPc: '1381.59',
        perkg: '2302458.27',
        perPack: '34739.75',
      },
      // {...},
    ],
    // simeple data
    
  };
  // the magic
  doc.table(table10, {
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
