const mongoose = require("mongoose");

// Define el esquema de la colección "publications"
const publicationsSchema = new mongoose.Schema({
  publication_description: String,
  username_publishing: String,
  publication_date: Date,
  has_attachment: Boolean
});

// Crea el modelo a partir del esquema
const publications = mongoose.model("publications", publicationsSchema);

module.exports = publications; // Exporta el modelo para su uso en otras partes de tu aplicación
