const Product = require("../models/productName");
const router = require("express").Router();


//GET Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ uid: req.params.id });
    !product && res.status(401).json("Product not Found");

    await Product.findByIdAndDelete(product._id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Product
router.get("/", async (req, res) => {
  try {    
    const product = await Product.find({}, 'name');
    // product = product["id"];
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const product = new Product(req.body);

  try {
    const savedYarn = await product.save();
    res.status(200).json(savedYarn);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/all", async (req, res) => {
  try{
    const array = req.body.array
    const result = await Product.insertMany(array, { ordered: true });
    console.log(`${result.insertedCount} documents were inserted`);
    res.status(200).json("Yarns Added "+result.insertedCount);
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;