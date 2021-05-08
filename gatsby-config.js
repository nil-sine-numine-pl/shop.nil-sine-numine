module.exports = {
  siteMetadata: {
    title: `Fundacja Nil Sine Numine`,
    url: 'https://numine.pl/',
    facebookUrl: 'https://www.facebook.com/KurnikPolski/',
    footerFileUrl: '/Polityka-prywatnosci.pdf',
    description: 'Pomagajmy razem! Wspieraj nas przez zakup rękodzieła lub pysznej kawy prosto z Rwandy.'
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'pages',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Price'],
        secretKey: process.env.STRIPE_SECRET,
        downloadFiles: true,
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["STRIPE_SECRET", "STRIPE_PUBLISHABLE_KEY"]
      },
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}