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
      
      
        // For the Basic Information
       if(item.name == "Basic Information"){
        if(respone["basicInformation"][respone["basicInformation"].length - 1]["param"] == ""){
          data.pop();
          previous["isCurrency"] = false;
        }else{
          previous["isCurrency"] = true;

          data[data.length - 1][""] = respone["basicInformation"][respone["basicInformation"].length - 1]["param"]+ " " + respone["basicInformation"][respone["basicInformation"].length - 1]["value"];
        }

        previous["isPack"] = data[5][''] == "Open Stock";
        previous["isNormal"] = data[2][''] == "Apparel / Bathrobes" ? 2: data[2][""] == "Mattress Cover" ? 3: 1;
        
        if(previous["isNormal"] == 2)
          structure.splice(2 ,1);
        else if(previous["isNormal"] == 1)
          structure.splice(3 ,1);
        if(previous["isPack"])
          structure.splice(6 ,1);
      }
      // For the Product Information
      else if(item.name == "Product Information"){
        let yarns = previous["Basic Information"][4][''];
        let sum = 0;
        let percent = 0
        let yarnInfo = null;
        for (let i = 0; i < yarns; i++) {
          yarnInfo = respone["productInformation"]["productInformationList"][i];
          data.push({
            "number": data.length + 1,
            "Type": yarnInfo["selectType"],
            "Rate(lbs)": yarnInfo["param1"],
            "Rate(Kg)": (yarnInfo["ratekg"]).toFixed(2),
            "Percentage": yarnInfo["param2"],
            "Total per Kg": (yarnInfo["totalperkg"]).toFixed(2),
          });

          sum += yarnInfo["totalperkg"] * 1;
          percent += yarnInfo["param2"] * 1;
        }

        data.push({
          "Percentage": percent,
          "Total per Kg": sum.toFixed(2),
        });
      }

      // For the Per Piece Information
      else if(item.name == "Per Piece Information" || item.name == "Per Piece Apparel Infomation"){
        console.log(data[2]['']);
        for (let i = 0; i < data.length; i++) {
        const element = data[i];

        if(previous["isNormal"] != 2)
            element[""] = respone["perPieceInfo"]["perPieceInfo_Cat"][i]["param"];
        else if(previous["isNormal"] == 2){
            if(i == 0 || i == data.length - 1)
              element["Total"] = respone["perPieceInfo"]["perPieceInfo_Apparel"][i]["param1"];
            
            else{
              element["Width"] = respone["perPieceInfo"]["perPieceInfo_Apparel"][i]["param1"];
              element["Length"] = respone["perPieceInfo"]["perPieceInfo_Apparel"][i]["param2"];
              element["Total"] = respone["perPieceInfo"]["perPieceInfo_Apparel"][i]["value"];
            }
          }
        }

        data.push({"Categories": `Piece Weight ${previous["isNormal"] == 3 ? "2": ""}`, "": respone["perPieceInfo"]["pieceWeight"], "Total": respone["perPieceInfo"]["pieceWeight"]})
      }

      // For the Production Wastages
      else if(item.name == "Production Wastages"){
        for (let i = 0; i < data.length; i++) {
          let temp = previous["Product Information"][previous["Product Information"].length - 1]["Total per Kg"];
          const element = data[i];

          element["Percentages"] = respone["productWastage"]["productWastageList"][i]["param"];
          element["Cost"] = (respone["productWastage"]["productWastageList"][i]["param"] / 100) * temp;
        }
        
        data.push({"Percentages": respone["productWastage"]["totalPercentage"].toFixed(2), "Cost": respone["productWastage"]["totalCost"].toFixed(2)})
      }

      // For the fabric Cost Information
      else if(item.name == "Fabric Cost Information"){
        for (let i = 0; i < data.length - 1; i++) {
          const element = data[i];
          element[""] = respone["fabricCostInfo"]["fabricCostInfoList"][i]["param"];
        }

        data[data.length - 1][""] = respone["perPieceInfo"]["pieceWeight"];
        data.push({"Categories": "Per Piece Fabric Cost:", "": respone["fabricCostInfo"]["perPcFabric"]})
      }

      // For CMT Cost Per Piece (without Packing)
      else if(item.name == "CMT Cost Per Piece (without Packing)"){
        let perKg = respone["perPieceInfo"]["pieceWeight"] / 1000;
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
            element["Per PC"] = i == 0 ? respone["fabricCostInfo"]["perPcFabric"]: respone["costPerPiece"]["costPerPieceList"][i]["param"].toFixed(2);
            element["Per Kg"] = i == 0 ? (respone["fabricCostInfo"]["perPcFabric"] * perKg): respone["costPerPiece"]["costPerPieceList"][i]["value"].toFixed(2);
        }

        data.push({"Categories": "Total CMT Cost:", "Per PC": respone["costPerPiece"]["totalPerPc"].toFixed(2), "Per Kg": respone["costPerPiece"]["totalPerKg"].toFixed(2),})
      }

      // For CMT Per Pack Infomation
      else if(item.name == "CMT Per Pack Infomation"){
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if(i != 0){
            element[""] = respone["cmtCost"]["cmtCostList"][i]["param"];
          }else{
            element[""] = respone["cmtCost"]["cmtCostList"][i]["param"];
          }
        }

        data.push({"Categories": "Total CMT Cost:", "": respone["cmtCost"]["perPackCostTotal"]})
      }

      // For Operating Cost
      else if(item.name == "Operating Infomation"){
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          element["Percentages"] = respone["variableCost"]["variableCostList"][i]["param"];
          element["Per PC"] = respone["variableCost"]["variableCostList"][i]["value1"].toFixed(2);
          element["Per Kg"] = respone["variableCost"]["variableCostList"][i]["value2"].toFixed(2);
        }

        data.push({"Categories": "Total Operating Cost:", "Per PC": respone["variableCost"]["perPcTotal"].toFixed(2), "Per Kg": respone["variableCost"]["perKgTotal"].toFixed(2)})
      }

      // For Finance / Operating / GP
      else if(item.name == "Finance / Operating / GP"){
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          element["Percentages"] = respone["fog"]["fogList"][i]["param"];
          element["Per PC"] = respone["fog"]["fogList"][i]["value1"].toFixed(2);
          element["Per Kg"] = respone["fog"]["fogList"][i]["value2"].toFixed(2);
        }

        data.push({"Categories": "Total Finance Cost:", "Per PC": respone["fog"]["totalPerPc"].toFixed(2), "Per Kg": respone["fog"]["totalPerKg"].toFixed(2)})
      }

      // For Final Cost For Customer
      else if(item.name == "Final Cost For Customer"){
        

        console.log(data)

        data[0]["Per PC"] = respone["finalCosting"]["finalCostingList"][0]["value1"];
        data[0]["Per Kg"] = respone["finalCosting"]["finalCostingList"][0]["value2"];

        if(previous["isCurrency"]){
          data.push({"number":"2","Title": "Cost in"+respone["basicInformation"][respone["basicInformation"].length - 1]["param"], "Per PC": respone["finalCosting"]["finalCostingList"][1]["value1"], "Per Kg": respone["finalCosting"]["finalCostingList"][1]["value2"]});
}
      if(previous["isPack"])
        header.pop()
      else{
        data[0]["Per Pack"] = respone["finalCosting"]["finalCostingList"][0]["value3"];
        console.log(respone["finalCosting"]["finalCostingList"][1]);
        if(previous["isCurrency"])
          data[1]["Per Pack"] = respone["finalCosting"]["finalCostingList"][1]["value3"];
      }
      }

      const table = {
        title:  { label: `${1+index}. ${item.name}`, fontFamily: fontBold },
        headers: header,    
        datas: data,
      };
      
      previous[item.name] = data;
      lastOne += ((data.length + 1) * (data.length > 7 ? 18.5: 23));
      
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
    console.log(err);
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