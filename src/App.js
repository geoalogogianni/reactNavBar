import './App.css';
import Sidebar from './components/Sidebar';
import SidebarData from './components/SidebarData';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Sidebar backgroundColor={'black'} />
      <Routes>
      <Route path='/home' exact element={<Home /> }/>
      </Routes>
      
      
        
      
    </Router>
  );
}

export default App;
