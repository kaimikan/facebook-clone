const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const newUser = await new User({
    username: "test",
    email: "test@abv.bg",
    password: "1234567",
  });

  await newUser.save();
  res.send("ok");
});

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // salt relates to pass brute force resistance
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // generate user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and return response
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // shorthand if statmement
    !user && res.status(404).json("User not found.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // we usually don't tell which credential the user got wrong
    !validPassword && res.status(400).json("Wrong password.");

    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
