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
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       families: ["Inconsolata:400,700"],
    //     },
    //   },
    // },
  ]
}
