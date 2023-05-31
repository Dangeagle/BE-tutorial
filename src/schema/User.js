const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// const Model = mongoose.model("user", UserSchema);

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
