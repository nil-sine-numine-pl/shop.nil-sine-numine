import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"

export default function IndexRoute(props: PageProps) {
  return (
    <Layout>
      <h1>Tu będzie sklep :)</h1>
      <p>{props.path}</p>
    </Layout>
  )
}