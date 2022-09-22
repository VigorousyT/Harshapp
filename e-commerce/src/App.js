import './App.css';
import Header from './Component/Header1';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
