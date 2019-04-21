import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { getStories } from '../services/story-service';

export default class Stories extends Component {
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
    this.setState({
      loading: false,
      stories: stories.data
    });
  }
  render() {
  let { loading, stories } = this.state;
    return (
      <div>
        <Helmet>
          <style>
            {`
            .story-footer {

            }
            `}
          </style>
        </Helmet>
        {loading && 
          <div className="uk-spinner"></div>
        }
        <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          {!loading &&
            stories.map((e, i) => {
              return (
                <div key={i}>
                  <div className="uk-card uk-card-default uk-card-hover uk-margin">
                    <div className="uk-card-media-top">
                      <img src={e.imageUrl} alt="" />
                    </div>
                    <div className="uk-card-body">
                      <div className="uk-card-badge uk-label">{e.publishedBy}</div>
                      <h3 className="uk-card-title">{e.title}</h3>
                      <p>{e.lead}</p>
                    </div>
                    <div className="uk-card-footer story-footer">
                      <a href={e.link} className="uk-button uk-button-text">Read more</a>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    )
  }
}