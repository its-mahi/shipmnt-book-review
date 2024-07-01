const express = require('express');

const { createReview, getReviews, getReview, updateReview, deleteReview } = require('../controllers/reviewController.js');

const { protect } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/', protect, createReview);
router.get('/', getReviews);
router.get('/:review_id', getReview);
router.put('/:review_id', protect, updateReview);
router.delete('/:review_id', protect, deleteReview);

module.exports = router;
