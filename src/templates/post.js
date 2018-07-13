import React from "react";
import { Link, graphql } from 'gatsby'; 
import Layout from "../components/layout";

const RelatedPost = ({ type, slug, title, date }) => (
  <li>
    <h3>
      {type}:{" "}
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
      <div className="related">
        <ul className="related-posts">
          {pageContext.prev ? (
            <RelatedPost type="Previous" slug={pageContext.prev.fields.slug} title={pageContext.prev.fields.title} date={pageContext.prev.fields.date} />
          ) : null}
          {pageContext.next ? (
            <RelatedPost type="Next" slug={pageContext.next.fields.slug} title={pageContext.next.fields.title} date={pageContext.next.fields.date} />
          ) : null}
        </ul>
      </div>
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
