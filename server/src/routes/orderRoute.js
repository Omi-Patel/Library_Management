const express = require("express");
const Order = require("../models/order");
const User = require("../models/user");
const fetchUser = require("../middlewares/auth");

const router = express.Router();

router.post("/", fetchUser, async (req, res) => {
  const { user, book } = req.body;
  // console.log(req.user);

  try {
    const order = new Order({ user, book });
    await order.save();

    // console.log(order);

    const olduser = await User.findById({ _id: req.user._id });

    olduser.orders.push(order.book);
    await olduser.save();

    res.status(201).json({ success: "Order Created Successfull", order });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
