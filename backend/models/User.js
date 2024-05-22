const mongoose = require("mongoose");
const roles = require("../constants/roles");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: roles.USER,
    },
    purchaseHistory: [
      {
        type: Object,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
