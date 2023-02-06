const Yarn = require("../models/yarnName");
const router = require("express").Router();


//GET Yarn

router.delete("/delete/:id", async (req, res) => {
  try {
    const Yarn = await Yarn.findOne({ _id: req.params.id });
    !Yarn && res.status(401).json("Yarn not Found");

    await Yarn.findByIdAndDelete(Yarn._id);

    res.status(200).json("Yarn has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Yarn
router.get("/", async (req, res) => {
  try {    
    const yarn = await Yarn.find({}, 'name');
    res.status(200).json(yarn);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const yarn = new Yarn(req.body);

  try {
    const savedYarn = await yarn.save();
    res.status(200).json(savedYarn);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/all", async (req, res) => {
  try{
    const array = req.body.array
    const result = await Yarn.insertMany(array, { ordered: true });
    console.log(`${result.insertedCount} documents were inserted`);
    res.status(200).json("Yarns Added "+result.insertedCount);
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;