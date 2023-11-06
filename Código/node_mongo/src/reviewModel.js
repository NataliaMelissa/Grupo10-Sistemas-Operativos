const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: { type: String },
    product: { type: String },
    review_date: { type: Date },
    username: { type: String },
    product_stars: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

