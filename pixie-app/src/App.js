import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Stylesheet from './pages/Stylesheet';
import Home from './pages/Home';
import Mediapage from './pages/Mediapage';

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path='stylesheet' element={<Stylesheet />} />
        <Route path='mediapage' element={<Mediapage />} />
      </Routes>
  );
}

export default App;
