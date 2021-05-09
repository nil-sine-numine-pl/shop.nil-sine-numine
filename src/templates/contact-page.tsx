import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <>
      <h1>Kontakt</h1>
      <div style={{textAlign: 'center'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
export const pageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
  `