import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';

const EditReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState(null);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { data } = await api.get(`/reviews/${review_id}`);
        setReview(data);
        setRating(data.rating);
        setComment(data.comment);
      } catch (error) {
        console.error('Error fetching review', error);
      }
    };

    fetchReview();
  }, [review_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/reviews/${review_id}`, { rating, comment });
      alert('Review updated successfully!');
      navigate.push('/reviews');
    } catch (error) {
      console.error('Error updating review', error);
    }
  };

  if (!review) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Review</h2>
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
        <button type="submit">Update Review</button>
      </form>
    </div>
  );
};

export default EditReview;
