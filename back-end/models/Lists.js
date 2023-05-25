const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model;

const ListsSchema = new Schema({
    text: { type: String },
    isDone: { type: Boolean, defaul: false },
    createdDate: { type: Date },
})

const Lists = model("lists", ListsSchema)

module.exports = Lists;