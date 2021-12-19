import React from 'react';
import PatientListComponent from './components/PatientListComponent';
import InputComponent from './components/InputComponent';
import PatientComponent from './components/PatientComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom' ;

function App() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/patients" className="navbar-brand">
            Home
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                Create
              </Link>
            </li>
          </div>
        </nav>
        </div>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/patients"]} component={PatientListComponent} />
            <Route exact path="/create" component={InputComponent} />
            <Route path="/patients/:id" component={PatientComponent} />
          </Switch>
        </div>
      </div>
      
    )
}

export default App;
