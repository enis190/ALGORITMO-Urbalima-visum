import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Thankyoupage from './Thankyoupage';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter basename={process.env.REACT_APP_SUBDIRECTORIO}>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/gracias">About</Link>
      </nav> */}
      <Routes basename={process.env.REACT_APP_SUBDIRECTORIO}>
        <Route index element={<Home />} />
        <Route path="gracias" element={<Thankyoupage/>} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
