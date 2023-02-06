const Report = require("../models/report");
const router = require("express").Router();


//GET ALL Report
router.get("/", async (req, res) => {
  try {    
    const report = await Report.find({status: true});
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {    
    const report = await Report.findById(req.params.id).limit(1);
  
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  const report = new Report(req.body);

  try {
    const savedModel = await report.save();
    res.status(200).json(savedModel);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
