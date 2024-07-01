const Review = require('../models/reviewModel.js');

// Create a new review
exports.createReview = async (req, res) => {
    const { book_id, rating, comment } = req.body;

    // Create a review with user ID from request and provided details
    const review = await Review.create({
        user: req.user._id,
        book_id,
        rating,
        comment,
    });
    res.status(201).json(review);
};

// Add a new review (same functionality as createReview, should be merged)
exports.addNewReview = async (req, res) => {
    const { book_id, rating, comment } = req.body;
    

    const review = await Review.create({
        user: req.user._id,
        book_id,
        rating,
        comment,
    });
    res.status(201).json(review);
};

// Get paginated list of reviews
exports.getReviews = async (req, res) => {
    const { page = 1, size = 10 } = req.query;

    const reviews = await Review.find()
        .skip((page - 1) * size) 
        .limit(parseInt(size));

    res.json(reviews);
};

// Get a single review by ID
exports.getReview = async (req, res) => {
    const review = await Review.findById(req.params.review_id);

    if (review) {
        res.json(review);
    } else {
        res.status(404).json({ message: 'Review not found' });
    }
};

// Update an existing review by ID
exports.updateReview = async (req, res) => {
    const review = await Review.findById(req.params.review_id);

    if (review) {
        // Update review fields if provided
        review.rating = req.body.rating || review.rating;
        review.comment = req.body.comment || review.comment;
        const updatedReview = await review.save();
        res.json(updatedReview);
    } else {
        res.status(404).json({ message: 'Review not found' });
    }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
    const review = await Review.findById(req.params.review_id);

    if (review) {
        await review.deleteOne(); 
        res.status(204).json({ message: 'Review removed' }); 
    } else {
        res.status(404).json({ message: 'Review not found' });
    }
};
