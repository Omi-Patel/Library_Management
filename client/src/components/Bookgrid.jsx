import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BookGrid = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const userType = localStorage.getItem("userType");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const getAllBooks = async () => {
    const blob = await fetch(import.meta.env.VITE_BASE_URL + `/api/books`, {
      method: "GET",
    });

    const response = await blob.json();

    // console.log(response.books);
    setBooks(response.books);
  };

  const deleteBookHandle = async (bookId) => {
    try {
      const blob = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/books/${bookId}`,
        {
          method: "DELETE",
        }
      );

      const deletedBook = await blob.json();
      //   console.log(deletedBook);
      toast.success(deletedBook.success);
      getAllBooks();
    } catch (error) {
      console.log(error);
    }
  };

  // Open Razorpay
  const handleOpenRazorpay = async (data, bookId) => {
    const key = await axios.get(import.meta.env.VITE_BASE_URL + `/api/getkey`);
    console.log(key.data.key, "KEY");

    const options = {
      key: key.data.key, // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Library Management",
      description: "BookYourFurniture-Online",
      image: "https://avatars.githubusercontent.com/u/122214228?v=4",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      // callback_url: import.meta.env.VITE_MAIN_URL + "/api/paymentvarification",
      handler: function (response) {
        // console.log(response, "Varification");
        axios
          .post(
            import.meta.env.VITE_BASE_URL + `/api/paynow/paymentvarification`,
            {
              response: response,
            }
          )
          .then((res) => {
            console.log(res, "Order Varified");
            console.log("ORDER SAVED TO DB");
            makeOrder(bookId);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: "OM PATEL",
        email: "ompate@example.com",
        contact: "7777777777",
      },
      notes: {
        address: "Book Your Meal.PVT-Ltd",
      },
      theme: {
        color: "#3321cd",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Checkout Handler
  const checkoutHandler = async (amount, bookId) => {
    console.log(amount);
    const _data = { amount: amount };
    axios
      .post(import.meta.env.VITE_BASE_URL + `/api/paynow/checkout`, _data)
      .then((res) => {
        console.log(res.data, "Order Data");
        handleOpenRazorpay(res.data.data, bookId);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(order, "ORDER");

    //
  };

  // Send Order to DB
  const makeOrder = async (bookId) => {
    try {
      const userId = localStorage.getItem("userId");
      // console.log(userId, "USER");
      // console.log(productId, "PID");

      const user = userId;
      const book = bookId;

      if (!book || !user) {
        return toast.error("All Fields Are Required..!");
      }

      const response = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            user,
            book,
          }),
        }
      );

      // order response
      const orderRes = await response.json();
      console.log(orderRes);

      // condition
      if (orderRes) {
        toast.success(orderRes.success);
        navigate("/paymentsuccess");
      } else {
        toast.error(orderRes.error);
      }

      // end
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
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
        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books
              .filter((val) => {
                return search.toLowerCase() === ""
                  ? val
                  : val.title.toLowerCase().includes(search);
              })
              .map((book, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 w-full h-full flex flex-col justify-between"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-full object-cover rounded"
                  />
                  <h2 className="text-xl font-bold mt-4">{book.title}</h2>
                  <p className="text-gray-600">Author: {book.author}</p>
                  <p className="text-gray-600">Category: {book.genre}</p>
                  <p className="text-gray-600">Copies: {book.quantity}</p>
                  <p className="text-gray-600">Copies: {book.price}</p>

                  {userType === "admin" ? (
                    <div className="flex justify-between items-center">
                      <button className="mt-4 bg-blue-500 text-white py-2 px-3 rounded">
                        Update Book
                      </button>
                      <button
                        onClick={() => deleteBookHandle(book._id)}
                        className="mt-4 bg-red-500 text-white py-2 px-3 rounded"
                      >
                        Delete Book
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => checkoutHandler(book.price, book._id)}
                      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                    >
                      Issue Book
                    </button>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-medium">No Books Created Yet..!</h1>
            <NavLink to="/admin/add-book">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto my-4   rounded focus:outline-none focus:shadow-outline">
                Add Book
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookGrid;
