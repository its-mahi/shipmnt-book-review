import React, { useState } from 'react';
import api from '../../api';

const AddReview = () => {
  const [book_id, setBookId] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/reviews', { book_id, rating, comment });
      alert('Review added successfully!');
    } catch (error) {
      console.error('Error adding review', error);
    }
  };

  return (
    <div>
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book ID</label>
          <input
            type="text"
            value={book_id}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;
