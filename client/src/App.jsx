import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import BookGrid from './components/Bookgrid';
import AddBook from './components/Admin/Addbook';
import { Profiler } from 'react';
import Profile from './components/Profile'

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
        <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
