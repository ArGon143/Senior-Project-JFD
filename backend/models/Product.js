const mongoose = require("mongoose");
const validator = require("validator");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
        message: "Image should be a valid url",
      },
    },
    description: {
      type: String,
      required: true,
    },
    specifications: [
      {
        type: Object,
      },
    ],
    count: {
      type: Number,
      default: 1,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    bestSel: {
      type: Boolean,
      default: false,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
