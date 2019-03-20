import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Grace Gorenflo</h1>
        <div className="uk-section uk-section-muted">
          <div className="uk-container uk-grid uk-grid-medium uk-child-width-1-3@s uk-text-center" data-uk-grid>
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
      </div>
    );
  }
}