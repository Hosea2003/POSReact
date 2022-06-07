import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='AppGlass'>
          <Sidebar/>
          <div>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
            </Routes>
          </div>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
