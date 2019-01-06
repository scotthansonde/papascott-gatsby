module.exports = {
  siteMetadata: {
    title: `PapaScott`,
    emoji: `🚀`,
    desc: 'I like big blogs and I cannot lie',
    description: 'I like big blogs and I cannot lie',
    siteUrl: 'https://www.papascott.de',
    pagination: 5,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`PT+Serif\:400,400italic,700`, `PT+Sans\:400`],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-transformer-json`,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 5,
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {
                    frontmatter: { layout: { eq: "post" } }
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed/index.xml',
            title: 'Gatsby RSS Feed',
          },
        ],
      },
    },
  ],
};
