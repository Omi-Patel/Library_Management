import { useState, useEffect } from "react";
import StatisticsCard from "./StatisticsCard";
import History from './Book-History'

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
        { id: 1, title: "Book 1", author: "Author A" },
        { id: 2, title: "Book 2", author: "Author B" },
        // Add more books as needed
      ];
      setBooks(booksData);
    };

    const fetchBorrowers = async () => {
      // Replace with actual fetch logic
      const borrowersData = [
        { id: 1, name: "Borrower 1", isActive: true },
        { id: 2, name: "Borrower 2", isActive: false },
        // Add more borrowers as needed
      ];
      setBorrowers(borrowersData);
    };

    // Call API functions
    fetchBooks();
    fetchBorrowers();
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <span className="justify-center sm:justify-start flex">
        <h1 className="text-2xl font-bold mb-4">
          Admin Dashboard
        </h1>
      </span>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatisticsCard title="Total Books" count={books.length} />
        <StatisticsCard
          title="Active Borrowers"
          count={borrowers.filter((b) => b.isActive).length}
        />
        
      </div>

      <History />
    </div>
  );
};

export default Dashboard;
