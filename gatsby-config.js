require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`article`, `user`],
        //If using single types place them in this array.
        singleTypes: [`page`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: process.env.USER,
          password: process.env.PASS,
        },
      },
    },
  ]
}
