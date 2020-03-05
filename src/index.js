import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import 'bulma-switch/dist/css/bulma-switch.min.css';
import './global.css';
import App from './components/App';

const container = document.getElementById('app');
ReactDOM.render(<App />, container);
