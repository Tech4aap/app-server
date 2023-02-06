const Report = require("../models/report");
const router = require("express").Router();
const reportDetails = require("../models/reportDetails");


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

async function getId(isOpen, isApparel) {
  var ids = [
    "63dfbf2fb96eb153e17716f3",
    "63dfc17b51a6ee6c1d8205dc",
    "63dfc1df51a6ee6c1d8205e0",
    "63dfc26c51a6ee6c1d8205e6",
    "63dfc30551a6ee6c1d8205e8",
    "63dfc39b51a6ee6c1d8205ef",
    "63dfc42851a6ee6c1d8205f1"
  ];

  if (isOpen) {
    
  }

  return ids;

}



module.exports = router;
