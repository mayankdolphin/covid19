import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import FetchData from './Component/FetchData';
import FetchStateData from './Component/FetchStateData';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h3><Link to={`/covid19/`}>Covid19 India Report</Link></h3>
              {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <Link to={`/covid19`}>Home </Link>
                </div>
              </div> */}
            </nav>
            <Switch>
              <Route path="/covid19/" exact component={Home} />
              <Route path="/covid19/statewise/:code" component={FetchStateData} />
              <Route component={Home} />
              <Redirect to='/covid19/statewise/' from='/covid19/' />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
function Home() {
  return (

    <FetchData />

  );
}
export default App;
