import './App.css';
import Sidebar from './components/Sidebar';
import SidebarData from './components/SidebarData';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Revenue from './pages/Revenue';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Sidebar backgroundColor={'black'} />
      <Routes>
      <Route path='/home' exact element={<Home /> }/>
      <Route path='/home/users' exact element={<Users /> }/>
      <Route path='/home/revenue' exact element={<Revenue /> }/>
      </Routes>
      <Routes>
      <Route path='/reports' exact element={<Reports /> }/>
      <Route path='/reports/report1' exact element={<Reports /> }/>
      <Route path='/report2' exact element={<Reports /> }/>
      <Route path='/report3' exact element={<Reports /> }/>
      </Routes>
      <Routes>
      <Route path='/products' exact element={<Products /> }/>
      </Routes>
    </Router>
  );
}

export default App;
