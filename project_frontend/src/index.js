import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages/App'
import Premium from './Containers/Premium'
import 'tachyons'
import App from './Pages/App'
// import Playlist from './Containers/Playlist';
// import Albums from './Containers/Albums';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
// import WebFrame from './Containers/WebFrame'
// import SearchPage from './Containers/SearchPage'

ReactDOM.render(<Provider store={Store}><App></App></Provider>, document.getElementById('root'));

// ReactDOM.render(<WebFrame></WebFrame>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
