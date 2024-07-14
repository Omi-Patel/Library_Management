import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import BookGrid from './components/Bookgrid';
import AddBook from './components/Admin/Addbook';
import Profile from './components/Profile';
import Forgot_Password from './components/Forgot_Password';
import New_Password from './components/New_Password';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookGrid />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/admin/add-book' element={<AddBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/recover-password/verify-otp' element={<Forgot_Password />} />
        <Route path='/recover-password/new-password' element={<New_Password />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
