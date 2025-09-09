const express = require("express");
const ProductModel = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();
// @route GET /api/admin/products
// @desc Get all products(Admin only)
// @access Private/admin

router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports=router;