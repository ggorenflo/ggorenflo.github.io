import React, { Component } from 'react';
import { getPodcasts } from '../services/story-service';

export default class Podcasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      podcasts: []
    }

    this.finishedLoadingPodcasts = this.finishedLoadingPodcasts.bind(this);
  }

  componentDidMount() {
    getPodcasts(this.finishedLoadingPodcasts);
  }

  finishedLoadingPodcasts(podcasts) {
    this.setState({
      loading: false,
      podcasts: podcasts.data
    });
  }
  render() {
    let { loading, podcasts } = this.state;
    return (
      <div>
        <p>You can find a full list of podcasts for the Daily Nebraskan <a href="https://soundcloud.com/daily-nebraskan">here</a>.</p>
        {loading &&
          <div className="uk-spinner"></div>
        }
        {!loading &&
          podcasts.map((p, i) => {
            return (
              <div className="content" key={i} dangerouslySetInnerHTML={{__html: p.embedCode}}>
              </div>
            );
          })
        }
      </div>
    )
  }
}