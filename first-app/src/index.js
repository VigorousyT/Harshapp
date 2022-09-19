import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Countries from './Countries';
import Home from './Home';
import Countryinfo from './Countryinfo';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/Countries' element={<Countries></Countries>}><Route path=':z' element={<Countryinfo></Countryinfo>}></Route></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='/Contactus' element={<Contactus></Contactus>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
