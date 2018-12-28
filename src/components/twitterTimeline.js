import React, { Component } from 'react';
// twitter-fetcher references browser global "window" which doesn't
// play nice with gatsby build. require only if window is defined
// and use only in componentDidMount
if (typeof window !== `undefined`) {
  const twitterFetcher = require('twitter-fetcher');
}
class twitterTimeline extends Component {
  componentDidMount() {
    twitterFetcher.fetch({
      profile: { screenName: 'papascott' },
      domId: 'twitter-news',
      maxTweets: 3,
      enableLinks: true,
      showPermalinks: true,
      showUser: false,
      showRetweet: false,
      showInteraction: false,
    });
  }
  render() {
    return (
      <div className="post" id="twitterWrapper">
        <p className="twitter-header">
          <a href="https://twitter.com/papascott">Tweets by @papascott</a>
        </p>
        <div id="twitter-news" />
      </div>
    );
  }
}

export default twitterTimeline;
