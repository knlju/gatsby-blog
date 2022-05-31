const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const { data } = await graphql(`
        query MyQuery {
            allContentfulBlogpost {
                edges {
                    node {
                        id
                        slug
                    }
                    next {
                        slug
                        title
                    }
                    previous {
                        slug
                        title
                    }
                }
            }
        }
    `)

    data.allContentfulBlogpost.edges.forEach(({ node: { id, slug }, next, previous }) => {
        createPage({
            path: `/posts/${slug}`,
            component: path.resolve(`./src/templates/post-page.js`),
            context: {
                id,
                next,
                previous
            }
        })
    })
}