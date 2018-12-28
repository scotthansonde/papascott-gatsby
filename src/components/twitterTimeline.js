import React from 'react';
import twitterFetcher from 'twitter-fetcher';

export default () => {
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
  return (
    <div className="post" id="twitterWrapper">
      <p className="twitter-header">
        <a href="https://twitter.com/papascott">Tweets by @papascott</a>
      </p>
      <div id="twitter-news" />
    </div>
  );
};
