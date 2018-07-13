import React from "react"

export default ({metadata}) => (
  <div className="masthead">
  <div className="container">
    <h3 className="masthead-title">
      <a href="/" title="Home">{metadata.title} Gatsby Test!</a>{' '}
      <small>{metadata.desc}</small>
    </h3>
  </div>
</div>

);