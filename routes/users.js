const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("users");
});

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userID === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      // hash plain text password
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (e) {
        return res.status(500).json(e);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account updated: ", user);
    } catch (e) {
      return res.status(500).json(e);
    }
  } else {
    return res.status(403).json("You can only update your account.");
  }
});

// DELETE

// GET USER

// FOLLOW USER

// UNFOLLOW USER

module.exports = router;
