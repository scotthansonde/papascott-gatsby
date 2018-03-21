import React from "react";
import Link from "gatsby-link";

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

export default ({ data, pathContext }) => {
  const post = data.post;
  return (
    <div>
      <div className="post">
        <h1 className="post-title">{post.fields.title}</h1>
        <span className="post-date">{post.fields.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {/* <div className="related">
        <ul className="related-posts">
          {pathContext.prev ? (
            <RelatedPost type="Previous" slug={pathContext.prev.fields.slug} title={pathContext.prev.fields.title} date={pathContext.prev.fields.date} />
          ) : null}
          {pathContext.next ? (
            <RelatedPost type="Next" slug={pathContext.next.fields.slug} title={pathContext.next.fields.title} date={pathContext.next.fields.date} />
          ) : null}
        </ul>
      </div> */}
    </div>
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
