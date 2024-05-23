require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {
  register,
  login,
  getUsers,
  getRoles,
  updateUser,
  deleteUser,
} = require("./controllers/user");
const mapUser = require("./helpers/mapUser");
const authenticated = require("./middlewares/authenticated");
const hasRole = require("./middlewares/hasRole");
const ROLES = require("./constants/roles");
const {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} = require("./controllers/product");
const mapProduct = require("./helpers/mapProduct");
const { addComment, deleteComment } = require("./controllers/comment");
const mapComment = require("./helpers/mapComment");
const { getReviews, addReview, deleteReview } = require("./controllers/review");
const mapReview = require("./helpers/mapReview");
const { addCartData, getCartData } = require("./controllers/cart");
const mapCart = require("./helpers/mapCart");

const port = 3001;
const app = express();

app.use(express.static("../frontend/build"));

app.use(cookieParser());
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { user, token } = await register(
      req.body.email,
      req.body.login,
      req.body.password
    );

    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message || "Unknown error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.login, req.body.password);

    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message || "Unknown error" });
  }
});

app.post("/logout", async (req, res) => {
  res.cookie("token", "", { httpOnly: true }).send({});
});

app.get("/products", async (req, res) => {
  const products = await getProducts();

  res.send({ data: products.map(mapProduct) });
});

app.get("/reviews", async (req, res) => {
  const reviews = await getReviews();

  res.send({ data: reviews.map(mapReview) });
});

app.get("/products/:id", async (req, res) => {
  const product = await getProduct(req.params.id);

  res.send({ data: mapProduct(product) });
});

app.use(authenticated);

app.post("/products/:id/comments", async (req, res) => {
  const newComment = await addComment(req.params.id, {
    content: req.body.content,
    author: req.user.id,
  });

  res.send({ data: mapComment(newComment) });
});

app.delete(
  "/products/:productId/comments/:commentId",
  hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    await deleteComment(req.params.productId, req.params.commentId);

    res.send({ error: null });
  }
);

app.post("/products", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newProduct = await addProduct({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    count: req.body.count,
    selected: req.body.selected,
    bestSel: req.body.bestSel,
    image: req.body.imageUrl,
    specifications: req.body.specifications,
  });

  res.send({ data: mapProduct(newProduct) });
});

app.patch("/products/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  const updateProduct = await editProduct(req.params.id, {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    count: req.body.count,
    selected: req.body.selected,
    bestSel: req.body.bestSel,
    image: req.body.imageUrl,
    specifications: req.body.specifications,
  });

  res.send({ data: mapProduct(updateProduct) });
});

app.delete("/products/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteProduct(req.params.id);

  res.send({ error: null });
});

app.get("/users", hasRole([ROLES.ADMIN]), async (req, res) => {
  const users = await getUsers();

  res.send({ data: users.map(mapUser) });
});

app.get("/users/roles", hasRole([ROLES.ADMIN]), async (req, res) => {
  const roles = getRoles();

  res.send({ data: roles });
});

app.patch("/users/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newUser = await updateUser(req.params.id, {
    role: req.body.roleId,
  });

  res.send({ data: mapUser(newUser) });
});

app.delete("/users/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteUser(req.params.id);

  res.send({ error: null });
});

app.post("/reviews", async (req, res) => {
  const newReview = await addReview({
    content: req.body.content,
    author: req.user.id,
  });

  res.send({ data: mapReview(newReview) });
});

app.post("/cart", async (req, res) => {
  const newCartData = await addCartData({
    data: req.body.data,
    author: req.user.id,
  });

  res.send({ data: mapCart(newCartData) });
});

app.get("/cart", async (req, res) => {
  const cartData = await getCartData();

  res.send({ data: cartData.map(mapCart) });
});

app.delete(
  "/reviews/:reviewId",
  hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    await deleteReview(req.params.reviewId);

    res.send({ error: null });
  }
);

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log(`Server has been started on port ${port}...`);
  });
});
