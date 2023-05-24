const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://nozewolrd:20051223bataa@cluster0.peqxcnp.mongodb.net/todolist?retryWrites=true&w=majority"
);

const connect = async () => {
  try {
    mongoose.connection.once("open", () => {
      console.log("Successfully connected mongodb");
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
