import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Home';
import BookList from './components/Books/BookList';
import ReviewList from './components/Reviews/ReviewList';
import AddReview from './components/Reviews/AddReview';
import EditReview from './components/Reviews/EditReview';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddReviewForSelectedBook from './components/Reviews/AddReviewForSelectedBook';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:book_id" element={<AddReviewForSelectedBook/>} />
          
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/add" element={<AddReview />} />
          <Route path="/reviews/edit/:review_id" element={<EditReview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
