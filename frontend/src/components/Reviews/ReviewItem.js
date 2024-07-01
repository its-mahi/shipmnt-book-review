import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <li>
      <h4>Book ID: {review.book_id}</h4>
      <p>Rating: {review.rating}</p>
      <p>Comment: {review.comment}</p>
    </li>
  );
};

export default ReviewItem;
