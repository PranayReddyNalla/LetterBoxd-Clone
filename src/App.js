
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './pages/nav';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
