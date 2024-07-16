import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  detailUrl: {
    type: String,
    required: true,
  },
  title: {
    shortTitle: {
      type: String,
      required: true,
    },
    longTitle: {
      type: String,
      required: true,
    },
  },
  price: {
    mrp: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
  },
});

const Product = mongoose.model('product', productSchema);
export default Product;
