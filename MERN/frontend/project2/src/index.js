import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App';
import Mylogin from './login';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
if(localStorage.getItem("token")==null)
   {
    root.render(
      <React.StrictMode>
          <Mylogin />
      </React.StrictMode>
   );
   }else{
       root.render(
          <React.StrictMode>
              <App />
          </React.StrictMode>
       );
   }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
