const Cart = require("../models/Cart");

// add
async function addCartData(cartData) {
  return Cart.create(cartData);
}

//get
function getCartData() {
  return Cart.find().populate("author");
}

module.exports = {
  addCartData,
  getCartData,
};
