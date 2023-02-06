const Report = require("../models/report");
const reportDetails = require("../models/reportDetails");
const reportConstant = require("../models/modelDetails");
const router = require("express").Router();
const fs = require('fs'); 
const path = require('path');

const pdf = require('pdf-creator-node');

const options = require('../helpers/options');
const data = require('../helpers/data');



//GET Report
router.get("/:id", async (req, res) => {
  try {    
    const report = await Report.findById(req.params.id).limit(1);

    const details = await getData(report.ids);
    
    const reports = {...report._doc, details: details};

    const {ids,_id, ...rest} = reports;
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json(err);
  }
});

async function getData(ids) {
  let details = [];
  
  for (const element of ids) {
    let value = await reportDetails.findById(element).limit(1);
    let header = await reportConstant.findById(value.refId).limit(1); 
    
    details.push({name: header.name,key: header.details, value: value.details});
  }

  return details;
}

router.get("/your/path", async (req, res) => {
  try {
    const html = fs.readFileSync(path.join(__dirname, '../template/report.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';
    let array = [];

    data.forEach(d => {
        const prod = {
            name: d.name,
            description: d.description,
            unit: d.unit,
            quantity: d.quantity,
            price: d.price,
            total: d.quantity * d.price,
            imgurl: d.imgurl
        }
        array.push(prod);
    });

    let subtotal = 0;
    array.forEach(i => {
        subtotal += i.total
    });
    const tax = (subtotal * 20) / 100;
    const grandtotal = subtotal - tax;
    const obj = {
        prodlist: array,
        subtotal: subtotal,
        tax: tax,
        gtotal: grandtotal
    }
    
    const document = {
        html: html,
        data: {
            products: obj
        },
        path: './docs/' + filename
    }
    await pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
        res.status(200).download('./docs/' + filename);
        fs.unlink('./docs/' + filename, (err) => {
          if (err) {
              throw err;
          }
          console.log("Delete File successfully.");
      });
    
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;