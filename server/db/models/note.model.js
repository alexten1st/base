const mongoose = require("mongoose")

const NOTESchema = mongoose.Schema({
    title: String,
    content: String,
})

const note = mongoose.model("NOTE",NOTESchema );

module.exports = note