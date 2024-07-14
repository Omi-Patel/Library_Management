import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Books</h2>
      <ul className="divide-y divide-gray-200">
        {books.map(book => (
          <li key={book.id} className="py-2">
            <p className="text-xl">{book.title}</p>
            <p className="text-gray-600">{book.author}</p>
            {/* Display other details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;