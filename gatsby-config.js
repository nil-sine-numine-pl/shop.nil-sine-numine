module.exports = {
  siteMetadata: {
    title: `Fundacja Nil Sine Numine`,
    siteUrl: 'https://nilsinenumine.netlify.app/',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/static/img`,
    //     name: 'pages',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages',
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
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}