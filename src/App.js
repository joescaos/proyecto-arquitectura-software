import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/NavBar.js'
import Dashboard from './components/layout/Dashboard';
import BackgroundImage from './pattern.png';

class App extends Component {
  render (){
    return(
      <div className="App" style={{ background: `url(${BackgroundImage})` }}>
        <Navbar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    )
  }
  
}

export default App;
