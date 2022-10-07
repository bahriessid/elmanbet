const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image: mongoose.Schema.Types.Mixed,
});

module.exports  = mongoose.model("Product", productSchema);

