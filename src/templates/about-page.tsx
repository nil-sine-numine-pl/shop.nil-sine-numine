import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
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