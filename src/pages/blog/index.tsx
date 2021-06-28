import React from 'react'
import BlogRoll from '../../components/blogRoll'
import { Page } from "../../components/page"

export default () => {
    return (
        <Page>
          <h1>Blog i newsy 📰</h1>
          <section className="section">
              <BlogRoll />
          </section>
        </Page>)
  }