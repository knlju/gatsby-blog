import { graphql, Link } from 'gatsby'
import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from './../components/Layout';

const PostPage = ({ data, pageContext }) => {
    const { post, title, slug } = data.contentfulBlogpost
    const { previous, next } = pageContext

    return (
        <Layout>
            <article>
                <h1>{title}</h1>
                <div>{renderRichText(post)}</div>
            </article>
            <div>
                {
                    next && (
                        <Link to={`/posts/${next.slug}`}>
                            <div>
                                <div>
                                    Read next:
                                </div>
                                <div>
                                    {next.title}
                                </div>
                            </div>
                        </Link>
                    )
                }
                {
                    previous && (
                        <Link to={`/posts/${previous.slug}`}>
                            <div>
                                <div>
                                    Read previous:
                                </div>
                                <div>
                                    {previous.title}
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query GetPostDataQuery($id: String) {
        contentfulBlogpost(id: {eq: $id}) {
            title
            slug
            post {
                raw
            }
        }
    }
  
`

export default PostPage