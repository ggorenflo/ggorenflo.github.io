import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Experience from './views/Experience';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import profilePic from './assets/new-profile.png';
import './App.css';
import 'uikit/dist/css/uikit.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.closeNavOverlay = this.closeNavOverlay.bind(this);
    UIkit.use(Icons);
  }

  activeNavlinkStyle = {
    color: 'black'
  }

  closeNavOverlay() {
    UIkit.offcanvas(document.getElementById('nav-offcanvas')).hide();
  }

  render() {
    return (
      <Router>
        <div data-uk-grid className="uk-grid uk-child-width-expand">
          <div className="uk-section uk-section-default">
            <div className="uk-container uk-container-small">
              <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
              <Route path={`${process.env.PUBLIC_URL}/work-samples/`} component={Portfolio} />
              <Route path={`${process.env.PUBLIC_URL}/experience/`} component={Experience} />
              <hr />
              <div className="uk-text-center uk-margin-top">
                <h5>CONTACT</h5>
                <div className="uk-flex-center uk-grid-small" data-uk-grid>
                  <h5>ggorenflo21@gmail.com</h5>
                  <h5>(913) 558-6195</h5>
                  <div className="uk-width-1-1">
                    { /* eslint-disable-next-line */ }
                    <a data-uk-icon="icon: twitter; ratio: 1.5"
                      className="uk-margin-small-right uk-icon-link"
                      href="https://twitter.com/gorenwiththeflo?lang=en"></a>
                    { /* eslint-disable-next-line */ }
                    <a
                      data-uk-icon="icon: linkedin; ratio: 1.5"
                      className="uk-margin-small-left uk-icon-link"
                      href="https://www.linkedin.com/in/grace-gorenflo"></a>
                  </div>
                </div>
              </div>
              <hr />
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
                  <NavLink activeStyle={this.activeNavlinkStyle} to={`${process.env.PUBLIC_URL}/experience`}>Experience</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={this.activeNavlinkStyle} to={`${process.env.PUBLIC_URL}/work-samples/`}>Work Samples</NavLink>
                </li>
                <li>
                  <a
                    data-uk-icon="icon: download; ratio: 1.2"
                    href="https://drive.google.com/uc?export=download&id=16mpIgqK5y2tKP3AUVrZ5XhbgxOTOUgjF">
                    Resume 
                  </a>
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
                      exact
                      to={`${process.env.PUBLIC_URL}/experience/`}>Experience</NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={this.closeNavOverlay}
                      activeStyle={this.activeNavlinkStyle}
                      style={{color: '#999'}}
                      to={`${process.env.PUBLIC_URL}/work-samples/`}>Work Samples</NavLink>
                  </li>
                  <li>
                    <a
                      data-uk-icon="icon: download; ratio: 1.2"
                      href="https://drive.google.com/uc?export=download&id=16mpIgqK5y2tKP3AUVrZ5XhbgxOTOUgjF">
                      Resume 
                    </a>
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
