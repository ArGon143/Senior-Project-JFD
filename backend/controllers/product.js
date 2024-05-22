const Product = require("../models/Product");

// add
async function addProduct(product) {
  const newProduct = await Product.create(product);
  await newProduct.populate({
    path: "comments",
    populate: "author",
  });

  return newProduct;
}

// edit
async function editProduct(id, product) {
  const newProduct = await Product.findByIdAndUpdate(id, product, {
    returnDocument: "after",
  });

  await newProduct.populate({
    path: "comments",
    populate: "author",
  });

  return newProduct;
}

// delete
function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}

//get
function getProducts() {
  return Product.find();
}

// get item
function getProduct(id) {
  return Product.findById(id).populate({
    path: "comments",
    populate: "author",
  });
}

module.exports = {
  addProduct,
  editProduct,
  deleteProduct,
  getProducts,
  getProduct,
};
