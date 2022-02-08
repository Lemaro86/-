import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const name='Roman'

ReactDOM.render(
  <React.StrictMode>
    <App myName={name} topPosition={'100px'} />
  </React.StrictMode>,
  document.getElementById('root')
);
