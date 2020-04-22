import React, { Component } from 'react';
import Stories from '../components/stories';
import Podcasts from '../components/podcasts';
import './Portfolio.css';

export default class Portfolio extends Component {
  
  render() {
    return (
      <div>
        <h1>Work Samples</h1>
        <ul className="uk-child-width-expand" data-uk-tab="{connect: '#my'}">
          <li><a href={this.props.match.url}>Articles</a></li>
          <li><a href={this.props.match.url}>Podcasts</a></li>
        </ul>

        <ul id="my" className="uk-switcher uk-margin">
          <li><Stories /></li>
          <li><Podcasts /></li>
        </ul>
      </div>
    );
  }
}