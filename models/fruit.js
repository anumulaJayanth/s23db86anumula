const mongoose = require("mongoose");

const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 3;
      },
      message: "Name must be at least 3 characters long",
    },
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a non-negative value"],
    max: [100, "Price must be less than or equal to 100"],
  },
});

module.exports = mongoose.model("fruit", fruitSchema);
