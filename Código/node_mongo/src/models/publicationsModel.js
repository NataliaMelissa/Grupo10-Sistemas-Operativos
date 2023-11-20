const mongoose = require("mongoose");

const publicationsSchema = new mongoose.Schema({
  publication_description: String,
  username_publishing: String,
  publication_date: Date,
  has_attachment: Boolean
});

const publications = mongoose.model("publications", publicationsSchema);

module.exports = publications;