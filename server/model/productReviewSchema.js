import mongoose from "mongoose";
const { Schema } = mongoose;

const productReviewSchema = new Schema({
  productId: { type: String, required: true },
  username: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', productReviewSchema);

export default Review;
