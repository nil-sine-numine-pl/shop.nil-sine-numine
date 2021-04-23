import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import Colors from '../components/colors'
import { css } from '@emotion/core'

const Post = styled.article({
  backgroundColor: 'white',
  padding: '0.8rem',
  marginTop: '1rem',
  display: 'grid',
  gridGap: '1rem',
  h2: {margin:0},
  a: {color: Colors.primary},
  '@media (max-width: 40rem)': {gridTemplateColumns: '1'},
  '@media (min-width: 40rem)': {gridTemplateColumns: 'auto auto'},
})

const ImageStyles = css({
  objectFit: 'cover',
  '@media (max-width: 40rem)': {
    width: '100% !important',
    height: '13rem !important',
  },
  '@media (min-width: 40rem)': {
    width: '13rem !important',
    height: '11rem !important',
  },
})

const BlogRoll = ({posts}) => {
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <Post>
                <div>
                  <GatsbyImage css={ImageStyles} image={getImage(post.frontmatter.featuredimage)} alt="alt" />
                </div>
                <div style={{marginLeft: '1rem'}}>
                  <Link to={post.frontmatter.slug}><h2>{post.frontmatter.title}</h2></Link>
                  <div>{new Date(post.frontmatter.date).toDateString()}, 🕐 <small>{post.timeToRead} min.</small></div>
                  <p>
                    {post.frontmatter.description}<br />
                    <p style={{textAlign:'right'}}>
                    <Link to={post.frontmatter.slug}>
                      Czytaj dalej →
                    </Link>
                    </p>
                  </p>
                </div>
              </Post>
            </div>
          ))}
      </div>
    )
  }

export default () => {
  const data = useStaticQuery(
    graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
        sort: {order: DESC, fields: frontmatter___date}
      ) {
        edges {
          node {
            frontmatter {
              date
              description
              slug
              title
              featuredimage {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, placeholder: BLURRED)
                }
              }
            }
            id
            timeToRead
          }
        }
      }
    }`
  ).allMarkdownRemark.edges
  return (
    <BlogRoll posts={data}/>
  )
}