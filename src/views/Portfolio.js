import React, { Component } from 'react';
//import stories from '../assets/stories';
import { getStories } from '../services/story-service';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      stories: []
    }

    this.finishedLoadingStories = this.finishedLoadingStories.bind(this);
  }

  componentDidMount() {
    getStories(this.finishedLoadingStories);
  }

  finishedLoadingStories(stories) {
    console.log(stories);
    this.setState({
      loading: false,
      stories: stories.data
    });
  }

  render() {
    let { loading, stories } = this.state;
    return (
      <div>
        <h1>Portfolio</h1>
        {loading && 
          <div className="uk-spinner"></div>
        }

        {!loading &&
          stories.map((e, i) => {
            return (
              <div className="uk-card uk-card-default uk-margin-bottom" key={i}>
                <div className="uk-card-media-top">
                  <img src={e.imageUrl} alt=""/>
                </div>
                <div className="uk-card-body">
                  <div className="uk-card-badge uk-label">{e.publishedBy}</div>
                  <h3 className="uk-card-title">{e.title}</h3>
                  <p>{e.lead}</p>
                </div>
                <div className="uk-card-footer">
                  <a href={e.link} className="uk-button uk-button-text">Read more</a>
                </div>
              </div>
            )
          }
          )
        }
      </div>
    );
  }
}