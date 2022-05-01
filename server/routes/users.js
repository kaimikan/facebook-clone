const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// UPDATE
router.put("/:id", async (req, res) => {
  console.log("BODY: ", req.body, " PARAMS: ", req.params);
  if (req.body.userID === req.params.id || req.body.isAdmin) {
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
        /* this is another way to write user.set(req.body) */
        $set: req.body,
      });
      res.status(200).json(`Account updated: ${user}`);
    } catch (e) {
      return res.status(500).json(e);
    }
  } else {
    return res.status(403).json("You can only update your account.");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userID === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account deleted.");
    } catch (e) {
      return res.status(500).json(e);
    }
  } else {
    return res.status(403).json("You can only delete your account.");
  }
});

// GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // _doc carries the whole object
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (e) {
    res.status(500).json(e);
  }
});

// FOLLOW USER
router.put("/:id/follow", async (req, res) => {
  if (req.body.userID !== req.params.id) {
    try {
      const userToFollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userID);
      if (!userToFollow.followers.includes(req.body.userID)) {
        await userToFollow.updateOne({ $push: { followers: req.body.userID } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("User has been followed");
      } else {
        res.status(401).json("Already following the user.");
      }
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json("You can't follow yourself.");
  }
});

// UNFOLLOW USER
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userID !== req.params.id) {
    try {
      const userToUnfollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userID);
      if (userToUnfollow.followers.includes(req.body.userID)) {
        await userToUnfollow.updateOne({
          $pull: { followers: req.body.userID },
        });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("User has been unfollowed");
      } else {
        res.status(401).json("Not following the user.");
      }
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json("You can't unfollow yourself.");
  }
});

module.exports = router;