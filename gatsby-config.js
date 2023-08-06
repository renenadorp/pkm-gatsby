/**
 * @type {import('gatsby').GatsbyConfig}
*/
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `pkm`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  
    plugins: [
   {
      resolve: `gatsby-source-git`,
      options: {

        apiKey: process.env.API_KEY,
        repos: [
          {
            name: `pkm-gatsby`,
            remote: `https://github.com/renenadorp/Knowledge.git`,
            branch: `main`,
            local: `/Users/rnadorp/Documents/Prive/pkm/gatsby/pkm`,

            patterns: [`*.md`],
          },          {
            name: `pkm-gatsby`,
            remote: `https://github.com/renenadorp/Knowledge.git`,
            patterns: [`*.jpg`],
            branch: `main`,
            local: `/Users/rnadorp/Documents/Prive/pkm/gatsby/pkm`

          },
        ],
      },
    },
  ]
}
