import React from 'react';
import GatsbyLink from 'gatsby-link';
// import HomeIcon from 'react-icons/lib/fa/home';
// import TagsIcon from 'react-icons/lib/fa/tags';

// import Link from '../components/Link';

// import '../css/tags.css';

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div>
        <h1>
          {tag.replace('Y','')} Achivies
        </h1>
        <ul className="posts">
          {post.map(({ id, fields, excerpt }) => {
            return (
              <li key={fields.slug}>
              <span className="post-date">{fields.date}&nbsp;
                  <GatsbyLink to={fields.slug}>
                    {fields.title}
                  </GatsbyLink></span>
              </li>
            );
          })}
        </ul>
        {/* <Link to="/tags">
          <TagsIcon /> All tags
        </Link> */}
      </div>
    );
  }
  return (
    <div>
      <h1>Archives</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={`/archives/${tagName.replace('Y','')}`}>
              {tagName.replace('Y','')} 
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
      {/* <Link to="/">
        <HomeIcon /> All posts
      </Link> */}
    </div>
  );
}