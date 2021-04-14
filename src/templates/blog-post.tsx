import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const BlogPostTemplate = ({
  content,
  description,
  title
}) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
