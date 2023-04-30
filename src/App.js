import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import { Route, Routes } from 'react-router';

const HatsPage = () =>(  
  <div>
    <h1>HatsPage</h1>
  </div>)

const JacketsPage = () =>(  
  <div>
    <h1>JacketsPage</h1>
  </div>)

const ShoesPage = () =>(  
  <div>
    <h1>ShoesPage</h1>
  </div>)

const WomensPage = () =>(  
  <div>
    <h1>WomensPage</h1>
  </div>)

const MensPage = () =>(  
  <div>
    <h1>MensPage</h1>
  </div>)



const App = () => {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/hats" element={<HatsPage/>}/>
        <Route path="/jackets" element={<JacketsPage/>}/>
        <Route path="/shoes" element={<ShoesPage/>}/>
        <Route path="/womens" element={<WomensPage/>}/>
        <Route path="/mens" element={<MensPage/>}/>
      </Routes>
    </div>
  )
  }

export default App;
