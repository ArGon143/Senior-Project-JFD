const Review = require("../models/Review");

// add
async function addReview(review) {
  return Review.create(review);
}

// delete
async function deleteReview(reviewId) {
  return Review.deleteOne({ _id: reviewId });
}

//get
function getReviews() {
  return Review.find().populate("author");
}

module.exports = {
  addReview,
  deleteReview,
  getReviews,
};
