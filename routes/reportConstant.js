const ModelDetails = require("../models/modelDetails");
const router = require("express").Router();


//GET ALL ModelDetails
router.get("/", async (req, res) => {
  try {    
    const model = await ModelDetails.find({status: true});
    const respones = model.map(({ name, details }) => ({ name, details }));
    
    res.status(200).json(respones);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const model = new ModelDetails(req.body);

  try {
    const savedModel = await model.save();
    res.status(200).json(savedModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ModelDetails
router.get("/:id", async (req, res) => {
  try {    
    const model = await ModelDetails.findById(req.params.id).limit(1);
    const result = {name: model.name, details: model.details};  
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;