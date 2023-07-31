import React from 'react';
import './App.css'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chemistry from './departments/Chemistry';
import Computer from './departments/Computer';
import English from './departments/English';
import Tamil from './departments/Tamil';
import Maths from './departments/Maths';
import Physics from './departments/Physics';

export default function App() {
  return (
    <>
      {/* <nav className='flex items-center p-2 border-b-2 border-white'>
        <img src='/images/book.png' alt='book' className='h-24 p-2' />
        <h1 className='text-4xl font-serif text-blue-500 font-bold p-3'>E-Library Portal</h1>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-auto mr-4'>ADMIN</button>
      </nav> */}
      <BrowserRouter>
        <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Computer />} /> */}
          <Route path="/computer" element={<Computer />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/english" element={<English />} />
          <Route path="/tamil" element={<Tamil />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/physics" element={<Physics />} />
        </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}
