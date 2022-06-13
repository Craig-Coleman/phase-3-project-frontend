import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import ListList from './ListList';
import Home from './Home';
import ListCreator from './ListCreator'

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/lists" element={<ListList/>}>
        </Route>
        <Route path='/createlist' element={<ListCreator/>}>
        </Route>
        </Routes>
    </div>
  );
};

export default App;
