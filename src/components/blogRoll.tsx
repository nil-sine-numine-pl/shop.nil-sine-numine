import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './previewCompatibleImage'

const BlogRoll = ({posts}) => {
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article>
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p>
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span>
                      &nbsp;{post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.frontmatter.description}
                  <br /><br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }

export default () => {
  const data = useStaticQuery(
    graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }`
  ).allMarkdownRemark.edges
  return (
    <BlogRoll posts={data}/>
  )
}