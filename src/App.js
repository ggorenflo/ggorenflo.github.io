import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import profilePic from './assets/profile.png';
import './App.css';
import 'uikit/dist/css/uikit.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.closeNavOverlay = this.closeNavOverlay.bind(this);
  }

  activeNavlinkStyle = {
    color: 'black'
  }

  closeNavOverlay() {
    UIkit.offcanvas(document.getElementById('nav-offcanvas')).hide();
  }

  render() {
    UIkit.use(Icons);
    return (
      <Router>
        <div data-uk-grid className="uk-grid uk-child-width-expand">
          <div className="uk-section uk-section-default">
            <div className="uk-container uk-container-small">
              <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
              <Route path={`${process.env.PUBLIC_URL}/about/`} component={About} />
              <Route path={`${process.env.PUBLIC_URL}/portfolio/`} component={Portfolio} />
            </div>
          </div>

          <div id="app-nav-sidebar" className="uk-width-1-5 App-nav">
            <div className="uk-section app-nav-section">
              <img src={profilePic} alt="" className="profile-picture uk-margin-bottom"/>
              <ul className="uk-nav uk-nav-primary">
                <li>
                  <NavLink activeStyle={this.activeNavlinkStyle} exact to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={this.activeNavlinkStyle} to={`${process.env.PUBLIC_URL}/about/`}>About</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={this.activeNavlinkStyle} to={`${process.env.PUBLIC_URL}/portfolio/`}>Portfolio</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="app-nav-overlay">
          <span
            data-uk-icon="icon: menu; ratio: 2"
            className="app-nav-overlay-icon"
            data-uk-toggle="#nav-offcanvas"></span>
            
          <div id="nav-offcanvas" data-uk-offcanvas="flip: true; mode: push; overlay: true">
            <div className="uk-offcanvas-bar" style={{
              background: '#e3e3e3'
            }}>
              <div className="uk-section app-nav-section">
              <img src={profilePic} alt="" className="profile-picture uk-margin-bottom"/>
                <ul className="uk-nav uk-nav-primary">
                  <li>
                    <NavLink
                      onClick={this.closeNavOverlay}
                      activeStyle={this.activeNavlinkStyle}
                      style={{color: '#999'}}
                      exact
                      to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={this.closeNavOverlay}
                      activeStyle={this.activeNavlinkStyle}
                      style={{color: '#999'}}
                      to={`${process.env.PUBLIC_URL}/about/`}>About</NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={this.closeNavOverlay}
                      activeStyle={this.activeNavlinkStyle}
                      style={{color: '#999'}}
                      to={`${process.env.PUBLIC_URL}/portfolio/`}>Portfolio</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
