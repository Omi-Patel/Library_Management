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
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookGrid />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <SignUp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRouteForAuth>
                <Signin />
              </ProtectedRouteForAuth>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paymentsuccess"
            element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-book"
            element={
              <ProtectedRouteForAdmin>
                <AddBook />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
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

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};

export const ProtectedRouteForAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export const ProtectedRouteForAdmin = ({ children }) => {
  const userType = localStorage.getItem("userType");
  if (userType === "admin") {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};
