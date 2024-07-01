import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Book Review Platform</h1>
      <p>
        <Link to="/books">Browse Trending Books</Link>
      </p>
    </div>
  );
};

export default Home;
