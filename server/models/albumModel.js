const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    postedBy: {
      userName: String,
      profilePic: String,
    },
    imageUrls: [
      {
        imageUrl: String,
        imagePublicId: String,
        imageThumbnailUrl: String,
        imageHeight: Number,
        imageWidth: Number,
      },
    ],
    description: { type: String },
    tags: [String],
    author: {
      name: String,
      profilePicture: String,
      id: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Album", albumSchema);
