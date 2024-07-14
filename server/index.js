const express = require("express");
const connectToDB = require("./config/connect");
const cors = require("cors");

const users = require("./src/routes/userRoute");
const books = require("./src/routes/bookRoute");

connectToDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Library Management");
});

app.use("/api/user", users);
app.use("/api", books);

app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
