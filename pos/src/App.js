import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'
import Clients from './pages/clients/Clients';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='AppGlass'>
          <Sidebar/>
          <div className='Routes'>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/clients' element={<Clients/>}/>
            </Routes>
          </div>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
