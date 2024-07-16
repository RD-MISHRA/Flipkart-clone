import Review from '../model/productReviewSchema.js';

// Function to handle adding a new review
export const addReview = async (req, res) => {
  try {
    const { productId, username, rating, comment } = req.body;

    // Check if all required fields are present
    if (!productId || !username || !rating || !comment) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    // Check if the user has already added a comment for this product
    const existingReview = await Review.findOne({ productId, username });
    if (existingReview) {
      console.log(existingReview);
      return res.status(400).json({ msg: 'You have already added a comment for this product' });
    }

    // Create a new review object
    const newReview = new Review({
      productId,
      username,
      rating,
      comment,
    });

    // Save the review to the database
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);  // Return 201 status for created
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
