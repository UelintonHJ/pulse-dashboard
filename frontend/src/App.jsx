import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';

function App() {
  return (
   <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search' element={<Search />} />
      </Routes>

   </BrowserRouter>
  );
}

export default App;
