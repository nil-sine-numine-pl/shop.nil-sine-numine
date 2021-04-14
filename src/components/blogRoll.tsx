import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'

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
                      <GatsbyImage image={getImage(post.frontmatter.featuredimage)} alt="alt" />
                    </div>
                  ) : null}
                  <p>
                    <Link to={post.frontmatter.slug}>
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
                  <Link className="button" to={post.frontmatter.slug}>
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
        filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
        sort: {order: DESC, fields: frontmatter___date}
      ) {
        edges {
          node {
            frontmatter {
              date
              description
              slug
              title
              featuredimage {
                childImageSharp {
                  gatsbyImageData(layout: FIXED)
                }
              }
            }
            id
          }
        }
      }
    }`
  ).allMarkdownRemark.edges
  return (
    <BlogRoll posts={data}/>
  )
}