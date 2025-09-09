const express = require("express");
const OrderModel = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
// @route GET /api/orders/my-orders
// @desc Get logged-in user's orders
// @access Private
router.get("/my-orders", protect, async (req, res) => {
  try {
    //Find orders for the authenticated user
    const orders = await OrderModel.find({ user: req.user._id }).sort({
      createdAt: -1,
    }); //sort by most recent orders
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route GET /api/orders/:id
// @desc get order details by Id
// @access Private
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // return the full order details
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
  }
});
module.exports=router;
