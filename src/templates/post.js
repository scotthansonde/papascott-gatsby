import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import RecentPosts from '../components/recentPosts';

const RelatedPost = ({ type, slug, title, date }) => (
  <li>
    <h3>
      {type}:{' '}
      <Link to={slug}>
        {title} <small>{date}</small>
      </Link>
    </h3>
  </li>
);

export default ({ data, pageContext }) => {
  const post = data.post;
  return (
    <Layout>
      <div className="post">
        <h1 className="post-title">{post.fields.title}</h1>
        <span className="post-date">{post.fields.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div>
        {pageContext.prev && (
          <span className="post-date">
            Previous Post:{' '}
            <Link to={pageContext.prev.fields.slug}>
              {pageContext.prev.fields.title}
            </Link>
          </span>
        )}
        {pageContext.next && (
          <span className="post-date">
            Next Post:{' '}
            <Link to={pageContext.next.fields.slug}>
              {pageContext.next.fields.title}
            </Link>
          </span>
        )}
      </div>
      <RecentPosts />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
        date
        url
      }
    }
  }
`;
