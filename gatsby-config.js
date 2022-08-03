module.exports = {
  siteMetadata: {
    title: `PapaScott`,
    emoji: `🥁`,
    desc: `Savin' it up for Friday night`,
    description: `Savin' it up for Friday night`,
    siteUrl: "https://www.papascott.de",
    pagination: 5,
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`PT+Serif:400,400italic,700`, `PT+Sans:400`],
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
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })),
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
            output: "/feed/index.xml",
            title: "Gatsby RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-opmlnote`,
      options: {
        url: `http://drummer.scripting.com/ScottHansonDE/papascott-de.opml`,
        name: "posts",
        timezone: "Europe/Berlin",
      },
    },
  ],
};
