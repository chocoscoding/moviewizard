import React from 'react';
import './App.css';
import {
Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home';
import OneShow from './routes/OneShow';
import Search from './routes/Search';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singleshow/:id/:mediatype" element={<OneShow/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
