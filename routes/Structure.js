const structrue = require("../models/structrue");
const router = require("express").Router();

//GET ALL structrue
router.get("/", async (req, res) => {
  try {    
    const report = await structrue.find({status: true});
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {    
    const report = await structrue.find({_id: req.params.id, status: true});
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  const report = new structrue(req.body);
  
  try {
    const savedreport = await report.save();
    res.status(200).json(savedreport);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/:col", async (req, res) => {
  try {
    const report = structrue.updateOne(
      { $name: req.body.name },
      { $set: req.body }
    );

    const report2 = await structrue.findOne({_id: req.params.col});

    console.log(report2);
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;