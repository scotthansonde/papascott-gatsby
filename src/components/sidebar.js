import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import _ from 'lodash';

const archivesStatic = _.rangeRight(1999, 2014 + 1);

export default ({ metadata, pages, archives }) => (
  <div className="sidebar" id="sidebar">
    <div className="sidebar-item">
      <p>
        <Link to="/">{metadata.title}</Link> is a personal weblog by Scott
        Hanson.
      </p>
      <p>
        Twitter: <a href="https://twitter.com/ScottHansonDE">@ScottHansonDE</a>
        <br />
        Facebook:{' '}
        <a href="https://www.facebook.com/ScottHansonDE/">ScottHansonDE</a>
        <br />
        GitHub: <a href="http://github.com/papascott">papascott</a>
      </p>
    </div>

    {pages.map((page, idx) => (
      <Link className="sidebar-nav-item" to={page.node.fields.slug} key={idx}>
        {page.node.fields.title}
      </Link>
    ))}

    <div className="sidebar-nav-item">
      Archives:&nbsp;
      {archives.map((yr) => (
        <span key={yr}>
          <Link to={`/archives/${yr}`}>{yr}</Link>{' '}
        </span>
      ))}
      {archivesStatic.map((yr) => (
        <span key={yr}>
          <a href={`/archives/${yr}`}>{yr}</a>{' '}
        </span>
      ))}
    </div>

    <a className="sidebar-nav-item" href="http://www.mcdonalds-nordheide.de/">
      McDonald's Nordheide-Harburg
    </a>

    <div className="sidebar-nav-item">
      Powered by <a href="https://www.gatsbyjs.org/">gatsby</a>, older posts by{' '}
      <a href="https://jekyllrb.com/">jekyll</a>, styled by{' '}
      <a href="http://lanyon.getpoole.com/">lanyon</a>, served by{' '}
      <a href="https://www.netlify.com/">netlify</a>, code and posts at{' '}
      <a href="https://github.com/papascott/papascott-gatsby">GitHub</a>.
      <p>&copy; {dayjs().format('YYYY')}. All rights reserved.</p>
    </div>
  </div>
);
