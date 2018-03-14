const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const createPaginatedPages = require("gatsby-paginate");
const moment = require("moment");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "MarkdownRemark") {
    let basePath = "posts";
    if (node.frontmatter.layout === "page") {
      basePath = "pages";
    }
    let basename = path.basename(createFilePath({ node, getNode, basePath }));
    basename = `/${basename}/`;
    
    let slug = basename.replace(/\/^(\d+)-(\d+)-(\d+)-/, '/archives/$1/$2/$3/');
    let title = node.frontmatter.title;
    let date = node.frontmatter.date;
    let nameArr = slug.split("-");
    if ( !date || date === null) {
      date =nameArr.splice(0, 3).join("-");
      // title = nameArr.join(" ").replace(".md", "");
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
        name: "date",
        value: moment(new Date (date)).format("DD MMM YYYY")
      });
      createNodeField({
        node,
        name: "tags",
        value: `Y${moment(new Date (date)).format("YYYY")}`
      });

      createNodeField({
        node,
        name: "url",
        value: "https://papascott.de" + slug
      });
    }
  }
};

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};
  

  edges
    .forEach(({ node }) => {
      if (node.fields.tags) {
        [node.fields.tags]
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  createPage({
    path: '/archives',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/archives/${tagName.replace('Y','')}`,
        component: tagTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allMarkdownRemark(
          sort: { fields: [fileAbsolutePath], order: DESC }
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
        createTagPages(createPage, posts);

        createPaginatedPages({
          edges: result.data.posts.edges,
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
