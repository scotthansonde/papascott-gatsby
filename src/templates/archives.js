import React from 'react';
import { Link } from 'gatsby';
import { decode } from 'html-entities';
import Layout from '../components/layout';

export default function Archives({ pageContext }) {
  const { posts, post, tag } = pageContext;

  if (tag) {
    return (
      <Layout>
        <h1>{tag.replace('Y', '')} Achivies</h1>
        <ul className="posts">
          {post.map((value) => (
            <li key={value.slug}>
              <span className="post-date">
                {value.date}&nbsp;
                <a href={value.slug}>{decode(value.title)}</a>
              </span>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
  return (
    <Layout>
      <h1>Archives</h1>
      <ul className="tags">
        {Object.keys(posts).map((tagName) => (
          <li key={tagName}>
            <Link to={`/archives/${tagName.replace('Y', '')}`}>
              {tagName.replace('Y', '')}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
