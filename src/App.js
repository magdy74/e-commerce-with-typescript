import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';

class App extends React.Component {
  constructor(){
    super();
  }
  
  render(){
    return (
    <div className="App">
       <HomePage />
    </div>
  );
  }
}

export default App;
