const express = require("express");
const cors = require("cors");
const connect = require("./Config/connect");
const todoRouter = require("./Routes/todoRoute");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/", todoRouter);
connect();

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
