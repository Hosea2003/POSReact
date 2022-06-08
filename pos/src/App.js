import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'
import Clients from './pages/clients/Clients';
import ClientDetail from './pages/ClientDetail/ClientDetail';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin/*' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
