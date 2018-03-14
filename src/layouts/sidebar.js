import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import _ from "lodash";

export default ({ metadata, pages, archives }) => (
  <div className="sidebar" id="sidebar">
    <div className="sidebar-item">
      <p>
        <Link to="/">{metadata.title}</Link> is a personal weblog by Scott Hanson.
      </p>
      <p>
        Twitter: <a href="https://twitter.com/papascott">@papascott</a><br />
        Facebook: <a href="https://www.facebook.com/papascott">papascott</a><br />
        GitHub: <a href="http://github.com/papascott">papascott</a>
      </p>
    </div>

    {pages.map((page, idx) => {
      return (
        <Link
          className="sidebar-nav-item"
          to={page.node.fields.slug}
          key={idx}
        >
          {page.node.fields.title}
        </Link>
      );
    })}

    <div className="sidebar-nav-item">Archives:&nbsp; 
      {archives.map(yr => (
        <span key={yr}><Link to={`/archives/${yr}`}>{yr}</Link> </span>
      )) }
    </div>

    <a className="sidebar-nav-item" href="http://www.mcdonalds-nordheide.de/">McDonald's Nordheide-Harburg</a>

    <div className="sidebar-nav-item">
      Powered by <a href="https://www.gatsbyjs.org/">gatsby</a>, styled by <a href="http://lanyon.getpoole.com/">lanyon</a>, served by <a href="https://www.netlify.com/">netlify</a>
      <p>&copy; {moment().format('YYYY')}. All rights reserved.</p>
    </div>

  </div>
);

