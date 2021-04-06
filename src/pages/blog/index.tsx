import React from 'react'
import Layout from '../../components/layout'
import BlogRoll from '../../components/blogRoll'

export default () => {
    return (
        <Layout>
           <h1>
            Blog
          </h1>
        <section className="section">
            <BlogRoll />
        </section>
        </Layout>)
  }