import React, { useEffect, useState } from 'react';
import api from '../../api';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await api.get('/books');
        console.log("data : ", data);

        setBooks(data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
    
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-serif font-semibold text-center '>Trending Books</h1>
      <ul>
        {books.map((book) => (
          <BookItem key={book.book_id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
