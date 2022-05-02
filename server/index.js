const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// helmet helps make requests to server secure
const helmet = require("helmet");
// morgan helps log server requests
const morgan = require("morgan");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
// used for uploading files (not a good idea practice to do it in the app but this is done for example purposes - usually files are hosted on AWS or something similar)
const multer = require("multer");
// used to fetch uploaded files from server
const path = require("path");

dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  {
    /* options */
  },
  (err) => {
    if (err) console.log(err);
    else console.log("MongoDB is connected");
  }
);

// we redirect requests to localhost:5000/images to the folder
app.use("/images", express.static(path.join(__dirname, "public/images")));

// MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  /* cb = callback */
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    // TODO req is null and can't figure out why, leaving non repeating files functionality for now FIXME
    console.log("req:", req, "file:", file);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded.");
  } catch (e) {
    console.log(e);
  }
});

// ROUTES
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Backend server is running!");
});
