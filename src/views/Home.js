import React, { Component } from 'react';
import unlLogo from '../assets/unl-logo.png';
import name from '../assets/name.png';
import './Home.css';

export default class Home extends Component {

  experienceList = [
    {
      companyName: 'The Daily Nebraskan',
      startDate: 'May 2019',
      endDate: 'Present',
      position: 'Assistant News Editor'
    },
    {
      companyName: '435 Magazine',
      startDate: 'Jun 2019',
      endDate: 'Aug 2019',
      position: 'Staff Writer'
    },
    {
      companyName: 'The Daily Nebraskan',
      startDate: 'Aug 2017',
      endDate: 'May 2019',
      position: 'Staff Writer'
    },
    {
      companyName: 'The Omaha World-Herald',
      startDate: 'Aug 2018',
      endDate: 'Dec 2018',
      position: 'Reporting Fellow',
      description: 'Friday night breaking news reporter.'
    }
  ]

  render() {
    return (
      <div>
        <img src={name} alt="" className="uk-margin" />
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
        {
          this.experienceList.map((e, i) =>  {
            return (
              <div className="uk-card uk-card-default uk-card-body uk-margin-bottom" key={i}>
                <div className="uk-card-title">{e.companyName}</div>
                <div className="uk-card-badge uk-label home-card-badge">{e.startDate} - {e.endDate}</div>
                <h4>{e.position}</h4>
                <p>{e.description}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}