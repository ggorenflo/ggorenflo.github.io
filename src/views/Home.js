import React, { Component } from 'react';
import Helmet from 'react-helmet';
import unlLogo from '../assets/unl-logo.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <style>
            {`
            @media(max-width: 600px) {
              .home-card-badge {
                position: static !important;
              }
            }
            `}
          </style>
        </Helmet>
        <h1>Grace Gorenflo</h1>
        <div className="uk-section uk-section-muted">
          <div className="uk-container uk-grid uk-grid-medium uk-child-width-expand@s uk-text-center" data-uk-grid>
            <div>
              <span uk-icon="icon: quote-right; ratio: 3"></span>
              <p className="uk-text-lead">Researcher</p>
            </div>
            <div>
              <span uk-icon="icon: pencil; ratio: 3"></span>
              <p className="uk-text-lead">Writer</p>
            </div>
            <div>
              <span uk-icon="icon: strikethrough; ratio: 3"></span>
              <p className="uk-text-lead">Editor</p>
            </div>
          </div>
        </div>
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-3@s uk-margin" data-uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                <img src={unlLogo} alt="" className="uk-align-center" />
            </div>
            <div className="uk-width-expand@m">
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Education</h3>
                    <h4>University of Nebraska-Lincoln</h4>
                    <p>Class of 2021</p>
                </div>
            </div>
        </div>
        <h2>Experience</h2>
        <div className="uk-card uk-card-default uk-card-body uk-margin-bottom">
          <div className="uk-card-title">Daily Nebraskan</div>
          <div className="uk-card-badge uk-label home-card-badge">Aug 2017 - Present</div>
          <h4>Staff Writer</h4>
          <p></p>
        </div>
        <div className="uk-card uk-card-default uk-card-body uk-margin-bottom">
          <div className="uk-card-title">Omaha World Herald</div>
          <div className="home-card-badge uk-card-badge uk-label">Aug 2018 - Dec 2018</div>
          <h4>Reporting Fellow</h4>
          <p>Friday night breaking news reporter.</p>
        </div>
      </div>
    );
  }
}