
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Revenue from './pages/Revenue';
import {Reports , Report1 , Report2 , Report3} from './pages/Reports';
import Products from './pages/Products';
import Messages from './pages/Messages';
import Team from './pages/Team';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    
    <Router>
      <Sidebar backgroundColor={'black'} />
     
      <Routes>
      
      <Route path='/home' exact element={<Home /> }/>
      <Route path='/home/users' exact element={<Users /> }/>
      <Route path='/home/revenue' exact element={<Revenue /> }/>
      <Route path='/reports' exact element={<Reports /> }/>
      <Route path='/reports/report1' exact element={<Report1 /> }/>
      <Route path='/reports/report2' exact element={<Report2 /> }/>
      <Route path='/reports/report3' exact element={<Report3 /> }/>
      <Route path='/products' exact element={<Products /> }/>
      <Route path='/messages' exact element={<Messages /> }/>
      <Route path='/team' exact element={<Team/> }/>
      </Routes>
     
    </Router>
    
  );
}

export default App;
