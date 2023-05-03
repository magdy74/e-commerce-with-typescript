import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import { Route, Routes } from 'react-router';
import ShopPage from './pages/shopPage/shopPage';
import SignInAndSingUpPage from './pages/sign-in-and- sign-up/sign-in-and- sign-up';
import Header from './components/header/header';

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
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/hats" element={<HatsPage/>}/>
        <Route path="/jackets" element={<JacketsPage/>}/>
        <Route path="/shoes" element={<ShoesPage/>}/>
        <Route path="/womens" element={<WomensPage/>}/>
        <Route path="/mens" element={<MensPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signin" element={<SignInAndSingUpPage/>}/>
      </Routes>
    </div>
  )
  }

export default App;
