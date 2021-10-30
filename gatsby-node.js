const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const createPaginatedPages = require("gatsby-paginate");
const dayjs = require("dayjs");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    let basePath = "posts";
    if (node.frontmatter.layout === "page") {
      basePath = "pages";
    }
    let basename = path.basename(createFilePath({ node, getNode, basePath }));
    let slashBasename = `/${basename}/`;
    let slug = slashBasename.replace(/^\/(\d{4})-(\d+)-(\d+)-/, '/archives/$1/$2/$3/');
    let title = node.frontmatter.title;
    let date = node.frontmatter.date;
    let nameArr = basename.split("-");
    if (!date || date === null) {
      date = nameArr.splice(0, 3).join("-");
    }

    createNodeField({
      node,
      name: "slug",
      value: slug
    });
    createNodeField({
      node,
      name: "title",
      value: title
    });
    if (node.frontmatter.layout !== "page") {
      createNodeField({
        node,
        name: 'date',
        value: dayjs(new Date(date)).format('DD MMM YYYY'),
      });
      createNodeField({
        node,
        name: 'tags',
        value: `Y${dayjs(new Date(date)).format('YYYY')}`,
      });

      createNodeField({
        node,
        name: "url",
        value: "https://papascott.de" + slug
      });
    }
  }
};

const createArchivePages = (createPage, edges) => {
  const archiveTemplate = path.resolve(`src/templates/archives.js`);
  const posts = {};


  // edges
  //   .forEach(({ node }) => {
  //     if (node.fields.tags) {
  //       [node.fields.tags]
  //         .forEach(tag => {
  //           if (!posts[tag]) {
  //             posts[tag] = [];
  //           }
  //           posts[tag].push(node);
  //         });
  //     }
  //   });

  edges.forEach(({ node }) => {

    [node.fields.tags].forEach(yr => {
      // let yr = `Y${dayjs(date).year().toString()}`;

      if (!posts[yr]) {
        posts[yr] = [];
      }
      posts[yr].push(node.fields);
    })
  })

  createPage({
    path: '/archives',
    component: archiveTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/archives/${tagName.replace('Y', '')}`,
        component: archiveTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {

        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: { layout: { eq: "post" } }
          }
        ) {
          edges {
            node {
              fields {
                title
                date
                slug
                tags
              }

              html
            }
            next {
              fields {
                title
                date
                slug
              }
            }
            previous {
              fields {
                title
                date
                slug
              }
            }
          }
        }
        pages: allMarkdownRemark(
          sort: { fields: [fileAbsolutePath], order: DESC }
          filter: { frontmatter: {  layout: { eq: "page" } } }
        ) {
          edges {
            node {
              fields {
                title
                slug
              }
            }
          }
        }
      }
    `).then(result => {

      const posts = result.data.posts.edges;

      createArchivePages(createPage, result.data.posts.edges);

      createPaginatedPages({
        edges: result.data.posts.edges.slice(0, 3),
        createPage: createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 3
      });

      result.data.posts.edges.map(({ node, next, previous }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/post.js"),
          context: {
            slug: node.fields.slug,
            prev: next,
            next: previous
          }
        });
      });

      result.data.pages.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/page.js"),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
