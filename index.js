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

// MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// ROUTES
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Backend server is running!");
});
