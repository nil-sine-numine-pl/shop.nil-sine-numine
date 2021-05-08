
import { graphql, useStaticQuery } from 'gatsby'

type Site = {
    siteMetadata: {
        title: string
        description: string
        facebookUrl: string
        footerFileUrl: string
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
              facebookUrl
              footerFileUrl
            }
          }
        }
      `)
      return site.siteMetadata
    }