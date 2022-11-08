import './App.css';
import Header from './component/Header';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
