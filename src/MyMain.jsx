import React, { Component } from 'react';
import './App.css';
import MyNavBar from './MyNavBar.jsx';
import MyMainContainer from './MyMainContainer';

class MyMain extends Component {
  
  render() {
    return (
      <div>
         < MyNavBar />
         < MyMainContainer />
      </div>
    );
  }
}

export default MyMain;

//comment