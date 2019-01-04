const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const InfoSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  title: String
});

module.exports = mongoose.model("info", InfoSchema, "info");
