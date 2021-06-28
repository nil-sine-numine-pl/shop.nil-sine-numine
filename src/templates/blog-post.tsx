import React from 'react'
import { graphql } from 'gatsby'
import { Lined, H1 } from '../components/lined'
import { Page } from '../components/page'

export const BlogPostTemplate = ({
  content,
  description,
  title
}) => {
  return (
    <Page className="section">
      <Lined><H1>{title}</H1></Lined>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Page>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
      <BlogPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
      />
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
