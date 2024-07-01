const axios = require('axios');
const Book = require('../models/bookModel');

const fetchTrendingBooks = async () => {
  try {

    const response = await axios.get('https://openlibrary.org/trending/daily');
    const data = response.data;

    const books = data.works || [];

    if (books.length === 0) {
      console.log('No books found.');
      return;
    }

    for (const book of books) {
      const book_id = book.cover_edition_key;
      const title = book.title;
      const author = book.author_name ? book.author_name.join(', ') : 'Unknown';

      // console.log({ book_id, title, author });

      await Book.findOneAndUpdate(
        { book_id: book_id },
        { book_id, title, author },
        { upsert: true, new: true }
      );
    }

    console.log('Trending books updated successfully');
  } catch (error) {
    console.error('Error fetching trending books:', error);
  }
};

module.exports = fetchTrendingBooks;
