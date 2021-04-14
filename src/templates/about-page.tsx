import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
  )
}
export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
  `