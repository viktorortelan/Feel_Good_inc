import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Site from './router';
import Home from './pages/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);



