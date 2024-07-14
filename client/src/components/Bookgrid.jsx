import { useState } from "react";
import { Helmet } from "react-helmet";

const books = [
    {
        image: 'path/to/image1.jpg',
        title: 'Computer Science & IT',
        author: 'Author 1',
        category: 'Educational',
        copies: 2,
    },
    {
        image: 'path/to/image2.jpg',
        title: 'Basic Computer Engineering',
        author: 'Author 2',
        category: 'Educational',
        copies: 1,
    },
    // Add more book objects here
];


const BookGrid = () => {

    const [search, setSearch] = useState("")

    return (
        <div className='max-w-7xl mx-auto min-h-screen'>
            <Helmet>
                <title>Library Management</title>
            </Helmet>
            <div className="container mx-auto px-2">
                <h1 className="text-3xl font-bold text-center my-8">All Books</h1>
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search Book"
                        autoFocus
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        className="border border-gray-300 rounded-full py-2 px-4 w-full max-w-lg"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {books.filter((val) => {
                        return search.toLowerCase() === "" ? val : val.title.toLowerCase().includes(search)
                    }).map((book, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full h-full flex flex-col justify-between">
                            <img src={book.image} alt={book.title} className="h-40 w-full object-cover rounded" />
                            <h2 className="text-xl font-bold mt-4">{book.title}</h2>
                            <p className="text-gray-600">Author: {book.author}</p>
                            <p className="text-gray-600">Category: {book.category}</p>
                            <p className="text-gray-600">Copies: {book.copies}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Issue Book</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookGrid;
