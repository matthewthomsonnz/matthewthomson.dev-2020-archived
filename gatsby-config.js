require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        semicolon: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthew Thomson`,
        short_name: `MT`,
        start_url: `/`,
        background_color: `#ebede0`,
        theme_color: `#0827e1`,
        display: `standalone`,
        icon:`src/images/mt.png`
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`page`, `user`],
        singleTypes: [`website-settings`],
        //If using single types place them in this array.
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: process.env.USER,
          password: process.env.PASS,
        },
      },
    }
  ]
}
