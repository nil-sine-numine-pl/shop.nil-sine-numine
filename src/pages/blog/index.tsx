import React from 'react'
import BlogRoll from '../../components/blogRoll'
import { Page } from "../../components/page"
import { Lined, H1 } from '../../components/lined'

export default () => {
    return (
        <Page>
          <Lined><H1>Blog i newsy</H1></Lined>
          <section className="section">
              <BlogRoll />
          </section>
        </Page>)
  }