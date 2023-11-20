const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String },
    username: { type: String },
    publication_description: { type: String },
    comment_date: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;