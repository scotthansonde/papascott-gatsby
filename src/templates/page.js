import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Page = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <Layout>
      <h1 className="page-title">{page.fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
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
export default Page;
