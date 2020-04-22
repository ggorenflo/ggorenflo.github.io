import React, { Component } from 'react';
import './Experience.css';

export default class Experience extends Component {
  experienceList = [
    {
      companyName: 'The Daily Nebraskan',
      startDate: 'March 2020',
      endDate: 'Present',
      position: 'Editor-in-chief'
    },
    {
      companyName: 'The Daily Nebraskan',
      startDate: 'May 2019',
      endDate: 'May 2020',
      position: 'Assistant News Editor'
    },
    {
      companyName: '435 Magazine',
      startDate: 'Jun 2019',
      endDate: 'Aug 2019',
      position: 'News Writer'
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
    )
  }
}