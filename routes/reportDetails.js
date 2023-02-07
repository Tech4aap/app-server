const reportDetails = require("../models/reportDetails");
const router = require("express").Router();
const ModelDetails = require("../models/modelDetails");

//GET ALL reportDetails
router.get("/", async (req, res) => {
  try {    
    const report = await reportDetails.find({status: true});
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL reportDetails
router.get("/:id", async (req, res) => {
  try {    
    const report = await reportDetails.findById(req.params.id).limit(1);
    const model = await ModelDetails.findById(report.refId).limit(1);

    const result = {name: model.name, header: model.details, value: report.details};  
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  const report = new reportDetails(req.body);
  
  try {
    const savedreport = await report.save();
    res.status(200).json(savedreport);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;