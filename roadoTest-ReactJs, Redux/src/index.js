import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import logo from './logo.svg';
import './App.css';
// import Routes from './router';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import {createStore} from 'redux';
import reducers from './reducer/index';
import {Provider} from 'react-redux';

import Routes from './router';

const store = createStore(reducers);

ReactDOM.render(

        <Provider store={store}>
                <div className="App">
                        <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <h1 className="App-title" style={{color: "white"}}>
                                Welcome to Roado Test <br/>
                                </h1>
                        </header>

                        <Routes />
                </div>
                
        </Provider>
        , 
        document.getElementById('root')
);
registerServiceWorker();
