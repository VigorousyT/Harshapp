import './App.css';
import Header from './component/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  );
}

export default App;
