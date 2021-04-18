import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
  `