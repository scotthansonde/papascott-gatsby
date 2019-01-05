import React from 'react';

export default ({ metadata }) => (
  <div className="masthead">
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
