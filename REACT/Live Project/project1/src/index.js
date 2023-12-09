import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import 'bootstrap/dist/css/bootstrap.css';
import './icon/css/all.css';
import "bootstrap/dist/js/bootstrap.bundle";

import App from './App';
import UserDashboard from './account/userapp';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(localStorage.getItem("type")=="CUSTOMER"){
  root.render(<React.StrictMode><UserDashboard /></React.StrictMode>);
}
else if(localStorage.getItem("type")=="SELLER"){
  root.render(<React.StrictMode> <h1>Welcome Seller</h1> </React.StrictMode>);
}
else{
  root.render(<React.StrictMode><App /></React.StrictMode>);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
