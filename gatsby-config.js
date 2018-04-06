module.exports = {
  siteMetadata: {
    title: `PapaScott`,
    desc: 'I like big blogs and I cannot lie',
    pagination: 5
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`PT+Serif\:400,400italic`, `700%7CPT+Sans\:400`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-transformer-json`,
    }
  ]
};
