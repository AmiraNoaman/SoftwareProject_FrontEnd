import React, { Component } from 'react';
import './HomePage.css';
import Home from '../Components/Home';
import AboutS from '../Components/AboutS';
import NavBar from '../Components/NavBar';
class HomePage extends Component {
  render() {
    return (
      <div className="conatiner">
        <NavBar/>
        <Home/>
        <AboutS/>
      </div>
    );
  }


}

export default HomePage;
