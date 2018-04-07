import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Routes from './router';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title" style={{color: "white"}}>
              Welcome to Roado Test <br/>
            </h1>
        </header>
      </div>
    );
  }
}

export default App;
