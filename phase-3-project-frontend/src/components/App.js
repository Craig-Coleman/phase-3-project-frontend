import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import ListList from './ListList';
import Home from './Home';
import List from './List';

function App() {

  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/lists')
      .then((r) => r.json())
      .then((res) => setLists(res))
  }, []);


  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/lists" element={<ListList lists={lists} setLists={setLists} />}>
        </Route>
        <Route path='/lists/:id' element={<List/>}>
        </Route>
        </Routes>
    </div>
  );
};

export default App;
