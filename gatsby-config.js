require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
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
        apiURL: process.env.URL,
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
  ]
}
