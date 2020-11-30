import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmployeesList from './components/EmployeesList';
import EditEmpolyee from './components/EditEmpolyee';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Employees App</Link>
              <div className="nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">List of employees</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/add" className="nav-link">Add new employee</Link>
                  </li> 
                </ul>
              </div>
        </nav>
        <Route path="/" exact component={EmployeesList} />
        <Route path="/edit/:id"  component={EditEmpolyee} />
        <Route path="/add"  component={AddEmployee} />
        </div>
      </Router>
    </div>
  );
}

export default App;
