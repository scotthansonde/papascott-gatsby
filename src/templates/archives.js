import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

export default function Archives({ pathContext }) {
  const { posts, post, tag } = pathContext;
  
  if (tag) {
    return (
      <Layout>
        <h1>
          {tag.replace('Y','')} Achivies
        </h1>
        <ul className="posts">
          {post.map(( value ) => {
            return (
              <li key={value.slug}>
              <span className="post-date">{value.date}&nbsp;
                  <a href={value.slug}>
                    {entities.decode(value.title)}
                  </a></span>
              </li>
            );
          })}
        </ul>
        {/* <Link to="/tags">
          <TagsIcon /> All tags
        </Link> */}
      </Layout>
    );
  }
  return (
    <Layout>
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
    </Layout>
  );
}