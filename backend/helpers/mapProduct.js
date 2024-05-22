const mongoose = require("mongoose");
const mapComment = require("./mapComment");

module.exports = function (product) {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    imageUrl: product.image,
    description: product.description,
    specifications: product.specifications,
    count: product.count,
    selected: product.selected,
    bestSel: product.bestSel,
    comments: product.comments.map((comment) =>
      mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
    ),
    publishedAt: product.createdAt,
  };
};
