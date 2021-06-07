import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Overview from './pages/Overview';
import Item from './pages/overview/Item';
import Email from './pages/overview/Email';
import { Reports, ReportsOne, ReportsTwo} from './pages/Reports';
function App() {
  return (
   <Router>
   <Sidebar />
   <Switch>
    <Route path='/overview' exact component={Overview}/>
    <Route path='/overview/item' exact component={Item}/>
    <Route path='/overview/email' exact component={Email}/>
    <Route path='/reports' exact component={Reports}/>
    <Route path='/reports/reports2' exact component={ReportsOne}/>
    <Route path='/reports/reports3' exact component={ReportsTwo}/>
   </Switch>
   </Router>
  );
}

export default App;
