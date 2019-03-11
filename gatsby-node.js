const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allCoursesJson {
          edges {
            node {
              id,
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) reject(result.errors);

      result.data.allCoursesJson.edges.forEach(({ node }) => {
        createPage({
          path: `/cursos/whatsapp/${ node.slug }`,
          component: path.resolve('./src/templates/courses.js'),
          context: {
            id: node.id
          },
        });
      });

      resolve();
    });
  });
};
