import Review from '../model/productReviewSchema.js';

// Function to handle getting all reviews for a specific product
export const getReview = async (req, res) => {
  try {
    const { productId } = req.params;
     console.log("product",productId);
    // Check if productId is provided
    if (!productId) {
      return res.status(400).json({ msg: 'Product ID is required' });
    }

    // Retrieve all reviews for the given productId
    const reviews = await Review.find({ productId });

    // Check if reviews exist
    if (!reviews.length) {
      return res.status(404).json({ msg: 'No reviews found for this product' });
    }

    // Return the reviews
    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
