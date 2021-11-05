import React from 'react';
import Layout from '../components/layout';

const FourOhFour = () => (
  <Layout>
    <h1>404: Page not found</h1>
    <p>
      Sorry, we've misplaced that URL or it's pointing to something that doesn't
      exist. <a href="/">Head back home</a> to try finding it again.
    </p>
  </Layout>
);
export default FourOhFour;
