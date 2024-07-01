import React, { useState } from 'react';
import api from '../../api';
import { useParams } from 'react-router-dom';


const AddReviewForSelectedBook = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const { book_id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/reviews/`, { book_id, rating, comment });
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

export default AddReviewForSelectedBook;
