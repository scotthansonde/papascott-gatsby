import React from 'react';
import Helmet from 'react-helmet';

export default ({ metadata }) => (
  <div className="masthead">
    <Helmet>
      <title>{metadata.title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Helmet>
    <div className="container">
      <h3 className="masthead-title">
        <a href="/" title="Home">
          {metadata.title}
        </a>{' '}
        <small>
          {metadata.desc} {metadata.emoji}
        </small>
      </h3>
    </div>
  </div>
);
