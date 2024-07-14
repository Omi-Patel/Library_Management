const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
// const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, mobile, userType } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });

    user = new User({ name, email, password, mobile, userType });
    await user.save();

    const payload = {
      user: { id: user.id, email: user.email, userType: user.userType },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) throw err;
        res.json({ success: "User Registered Successfully..!", token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const payload = {
      user: { id: user.id, email: user.email, userType: user.userType },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) throw err;
        res.json({ success: "Login Successfull..!", token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// User Profile
// router.get("/profile/:userId", async (req, res) => {
//   const id = req.params.userId;

//   // console.log(id);
//   try {
//     const user = await User.findById({ _id: id })
//       .select("-password")
//       .populate({
//         path: "orders",
//         populate: {
//           path: "book",
//         },
//       });
//     // console.log(user);
//     res.json({ msg: "User Verified Successfully", user });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });



module.exports = router;
