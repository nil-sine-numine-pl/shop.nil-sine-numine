
import { graphql, useStaticQuery } from 'gatsby'

type Site = {
    siteMetadata: {
        title: string
        description: string
    }
}

export default () => {
    const { site }: {site: Site} = useStaticQuery(
      graphql`
        query SITE_METADATA_QUERY {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `)
      return site.siteMetadata
    }