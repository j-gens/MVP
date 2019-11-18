import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header.jsx'
import App from './components/App.jsx'
import Lists from './components/Lists.jsx'

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<Lists />, document.getElementById('lists'));
