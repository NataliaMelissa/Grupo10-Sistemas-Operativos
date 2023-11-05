const mongoose = require("mongoose");

// Define el esquema de la colección "Review"
const reviewSchema = new mongoose.Schema({
  review: String,               // Campo para el review
  product: String,              // Campo para el nombre del producto
  review_date: Date,           // Campo para la fecha de revisión
  username: String,            // Campo para el nombre del usuario
  product_stars: Number        // Campo para la calificación del producto
});

// Crea el modelo a partir del esquema
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review; // Exporta el modelo para su uso en otras partes de tu aplicación
