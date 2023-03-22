import './App.css';
import Sidebar from './components/Sidebar';
import SidebarData from './components/SidebarData';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar backgroundColor={'black'} />
      
    </Router>
  );
}

export default App;
