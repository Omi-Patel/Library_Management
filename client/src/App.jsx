import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import BookGrid from "./components/Bookgrid";
import AddBook from "./components/Admin/Addbook";
import Profile from "./components/Profile";
import Dashboard_admin from "./components/Admin/Dashboard";
import Update_book from "./components/Admin/Update-book";
import Dashboard_librarian from './components/Librarian/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookGrid />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/dashboard" element={<Dashboard_admin />} />
          <Route path="/admin/update-book" element={<Update_book />} />
          <Route path="/librarian/dashboard" element={<Dashboard_librarian />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
