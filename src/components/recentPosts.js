import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query RecentPostsQuery {
        allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { layout: { eq: "post" } } }
        ) {
          edges {
            node {
              fields {
                title
                date
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div class="related" id="related">
        <h2>Recent Posts</h2>
        <ul className="related-posts">
          {data.allMarkdownRemark.edges.map(post => (
            <li key={post.node.fields.slug}>
              <h3>
                <Link to={post.node.fields.slug}>
                  {post.node.fields.title}{' '}
                  <small>{post.node.fields.date}</small>
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
);
