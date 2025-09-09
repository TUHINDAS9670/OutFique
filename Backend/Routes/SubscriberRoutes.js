const express = require("express");
const router = express.Router();
const SubscriberModel = require("../models/Subscriber");

// @router POST /api/subscribe
// @desc Handle newletter subscription
// @access Public
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  try {
    //check if the mail is already subscribed
    let subscriber = await SubscriberModel.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: "email is already subscribed" });
    }
    //create a new subscriber
    subscriber = new SubscriberModel({ email });
    await subscriber.save();
    res
      .status(201)
      .json({ message: "Successfully subscribed to the newsletter" });
  } catch (error) {
    console.error(error)
    res.status(500).json({message:"server error"})
  }
});

module.exports=router;
