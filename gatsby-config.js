module.exports = {
  siteMetadata: {
    title: `PapaScott`,
    desc: 'I like big blogs and I cannot lie',
    pagination: 5
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`PT+Serif\:400,400italic,700`, `PT+Sans\:400`]
        }
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
