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
  const isOpen = req.body.stockInfo != "Open Stock";
  const isApparel =  req.body.productType == "Apparel / Bathrobes";
  const details = {"ids": await getId(isOpen, isApparel), ...req.body};

  const report = new Report(details);
  try {
    const savedModel = await report.save();
    res.status(200).json(savedModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

async function getId(isOpen, isApparel) {
  let ids = [
    "63dfbf2fb96eb153e17716f3",
    "63dfc17b51a6ee6c1d8205dc",
    "63dfc1df51a6ee6c1d8205e0",
    "63dfc26c51a6ee6c1d8205e6",
    "63dfc30551a6ee6c1d8205e8",
    "63dfc39b51a6ee6c1d8205ef",
    "63dfc42851a6ee6c1d8205f1"
  ];

  if (isApparel) {
    ids[2] = "63dfc1a951a6ee6c1d8205de";
  }
  
  if(isOpen){
    ids.push("63dfc38551a6ee6c1d8205ed");
  }

  return ids;
}


router.put("/:id/:page", async (req, res) => {
  try {
    // const report = await Report.findById(req.params.id);
    const report = await Report.findById(req.params.id);
    if (report) {
      report.ids[req.params.page] = req.body.update;
      console.log(report);
      await report.save();
      res.status(200).json("Report has been update...");
    } else {
      res.status(404).json("Report not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (report) {
      await report.delete();
      res.status(200).json("Report has been deleted...");
    } else {
      res.status(404).json("Report not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
