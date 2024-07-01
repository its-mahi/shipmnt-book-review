import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
    return (
        <li>
            <h3>Title : {book.title}</h3>
            <p>Author : {book.author}</p>
            <p>Book Id : {book.book_id}</p>

            <Link to={`/books/${book.book_id}`} className='border'>Add Review</Link>

            <div className='bg-black h-1 w-full'></div>

        </li>
    );
};

export default BookItem;
