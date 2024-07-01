import React, { useEffect, useState } from 'react';
import api from '../../api';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await api.get('/reviews');
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
