import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
    path: `.env`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Curtie Dot Com, Inc.`,
        description: `Curtis Harrison, photographer, Bloomer, Wisconsin.`,
        author: `Emily Mikl`,
        siteUrl: `http://www.curtie.com/`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.GATSBY_TYPEKIT_ID,
                    families: ["ballinger-condensed"],
                },
            },
        },
    ],
}

export default config
