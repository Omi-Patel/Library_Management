import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import BookGrid from "./components/Bookgrid";
import AddBook from "./components/Admin/Addbook";
import Profile from "./components/Profile";
import Dashboard from "./components/Admin/Dashboard";
import Update_book from "./components/Admin/Update-book";

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
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/update-book" element={<Update_book />} />
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
