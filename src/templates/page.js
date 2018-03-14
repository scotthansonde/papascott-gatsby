import React from "react";

export default ({ data }) => {
  const page = data.markdownRemark;
  return (
    <div>
      <h1 className="page-title">{page.fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html}} />
    </div>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
      }
    }
  }
`;
