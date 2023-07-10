import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Stylesheet from './pages/Stylesheet';
import Home from './pages/Home';

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path='stylesheet' element={<Stylesheet />} />
      </Routes>
  );
}

export default App;
