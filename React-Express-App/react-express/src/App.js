import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div>
      <div>
        <Home></Home>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;