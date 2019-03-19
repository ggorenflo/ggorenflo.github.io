import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import './App.css';
import 'uikit/dist/css/uikit.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div data-uk-grid className="uk-grid uk-child-width-expand">
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
          </div>
          <div className="uk-width-1-5">
            <ul className="uk-nav uk-nav-primary">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
