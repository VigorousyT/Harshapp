import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Quiz from './Component/Quiz';
import Firstvisit from './Component/Firstvisit';
import Addproduct from './Addproduct';
import Homepage from './Component/Homepage';
import Allproducts from './Component/Allproducts';
import ProductDetails from './Component/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />}></Route>
          <Route path='/Firstvisit' element={<Firstvisit />}></Route>
          <Route path='/Quiz' element={<Quiz />}></Route>
          <Route path='/Addproduct' element={<Addproduct />}></Route>
          <Route path='/allproducts' element={<Allproducts />}></Route>
          <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
