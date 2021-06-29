import React from "react"
import { graphql } from "gatsby"
import { Page } from "../components/page"
import { Lined, H1 } from '../components/lined'

export default ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Page>
      <Lined><H1>{markdownRemark.frontmatter.title}</H1></Lined>
      <div style={{textAlign: 'center'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Page>
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
  }`