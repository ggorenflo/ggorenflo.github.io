import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="uk-text-center">Grace Gorenflo</h1>
        <h2 className="uk-text-center">About Me</h2>
        <div className="uk-width-large@m uk-align-center">
          <p>Hi! I’m Grace Gorenflo. I am a journalism major at the University of Nebraska-Lincoln
            minoring in business and communication studies. I’m originally from a Kansas City suburb,
            but my heart also resides in Colorado where my parents live.
          </p>
          <p>
            In my three years at UNL, I have worked for our student publication The Daily Nebraskan,
            first as a news reporter and then as a news editor. I had a fellowship with the
            Omaha World-Herald in fall 2018, and I interned for Kansas City Magazine in summer 2019.
            During the 2020-21 school year, I will be editor-in-chief of The Daily Nebraskan.
          </p>
          <p>
            My pipe dream is to own a small publication someday. Until then, I would ideally like to
            write long-form, investigative pieces for a magazine or a similar medium. I will likely be
            doing this from the greater Seattle area. 
          </p>
          <p>
          Bonus fact: I have dual citizenship in Luxembourg — and I wouldn’t mind being sent there on assignment.
          </p>
        </div>
      </div>
    );
  }
}