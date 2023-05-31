const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const CarzList = mongoose.Schema(
  {
    brand: String,
    price: Number,
    description: String,
    image: String,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// const Model = mongoose.model("user", UserSchema);

// export model user with UserSchema
module.exports = mongoose.model("carz", CarzList);
