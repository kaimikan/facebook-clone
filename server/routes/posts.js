const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// CREATE
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (e) {
    res.status(500).json(e);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userID === req.body.userID) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Updated post.");
    } else {
      res.status(403).json("You can update your posts only.");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userID === req.body.userID) {
      await post.deleteOne();
      res.status(200).json("Deleted post.");
    } else {
      res.status(403).json("You can delete your posts only.");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

// LIKE/UNLIKE POST
router.put("/:id/like", async (req, res) => {
  // we can like our own posts
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userID)) {
      await post.updateOne({ $push: { likes: req.body.userID } });
      res.status(200).json("Liked post.");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userID } });
      res.status(200).json("Unliked post.");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

// GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

// GET TIMELINE POSTS
router.get("/timeline/:userID", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userID);
    const userPosts = await Post.find({ userID: currentUser._id });
    // we use promise since we will have multiple queries
    const friendPosts = await Promise.all(
      currentUser.following.map((friendID) => {
        return Post.find({ userID: friendID });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (e) {
    res.status(500).json(e);
  }
});

// GET ALL USER POSTS
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userID: user._id });
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
