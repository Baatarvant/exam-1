const express = require("express");
const mongoose = require("mongoose");
const URI =
    "mongodb+srv://hohohoho:posedotrash@cluster0.0irz378.mongodb.net/s";
const Router = require("./router/Router");
const port = 7777;
const cors = require("cors");
const app = express();
app.use(cors());
mongoose.connect(URI);

mongoose.connection.once("open", () => {
    console.log("Successfully connected mongodb");
});

app.use(express.json());
app.use(Router);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});