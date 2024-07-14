import React, { useState, useEffect } from 'react';
import StatisticsCard from './StatisticsCard';
import BookList from './BookList';
import AddBook from './Addbook';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [borrowers, setBorrowers] = useState([]);
  // Add more state variables for other data

  // Simulate fetching data (replace with actual API calls)
  useEffect(() => {
    // Simulated API calls to fetch data
    const fetchBooks = async () => {
      // Replace with actual fetch logic
      const booksData = [
        { id: 1, title: 'Book 1', author: 'Author A' },
        { id: 2, title: 'Book 2', author: 'Author B' },
        // Add more books as needed
      ];
      setBooks(booksData);
    };

    const fetchBorrowers = async () => {
      // Replace with actual fetch logic
      const borrowersData = [
        { id: 1, name: 'Borrower 1', isActive: true },
        { id: 2, name: 'Borrower 2', isActive: false },
        // Add more borrowers as needed
      ];
      setBorrowers(borrowersData);
    };

    // Call API functions
    fetchBooks();
    fetchBorrowers();
  }, []);

  return (
    <div className="container mx-auto">
      <span className="justify-between flex">
      <h1 className="text-2xl font-bold mb-4"> Admin Dashboard</h1>
      <NavLink to="/admin/add-book"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto my-4   rounded focus:outline-none focus:shadow-outline"
                        >Add Book</button></NavLink>
      </span>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatisticsCard title="Total Books" count={books.length} />
        <StatisticsCard title="Active Borrowers" count={borrowers.filter(b => b.isActive).length} />
        {/* Add more statistics cards */}
      </div>
      <div className="mt-8">
        <BookList books={books} />
        {/* Add more lists or components */}
      </div>
    </div>
  );
};

export default Dashboard;
