module.exports = function (user) {
  return {
    id: user.id,
    email: user.email,
    login: user.login,
    roleId: user.role,
    purchaseHistory: user.purchaseHistory,
    registeredAt: user.createdAt.toLocaleDateString(),
  };
};
