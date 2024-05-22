module.exports = function (cartData) {
  return {
    data: cartData.data,
    author: cartData.author.login,
    id: cartData._id,
    publishedAt: cartData.createdAt.toLocaleDateString(),
  };
};
