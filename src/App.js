import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import { Route, Routes } from 'react-router';

const HatsPage = () =>{
  return(
    
  <div>
    <h1>HatsPage</h1>
  </div>
  )
}



const App = () => {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/hats" element={<HatsPage/>}/>
      </Routes>
    </div>
  )
  }

export default App;
