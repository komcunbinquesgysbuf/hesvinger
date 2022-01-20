module.exports = {
    siteMetadata: {
        title: "hesvinger-plain",
        siteUrl: "https://www.yourdomain.tld"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-remark-images",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [
                    ".mdx",
                    ".md"
                ],
                gatsbyRemarkPlugins: [
                    "gatsby-remark-normalize-paths",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1200
                        }
                    }
                ],
                defaultLayouts: {
                    pages: require.resolve("./src/components/default-page-layout.js"),
                    default: require.resolve("./src/components/default-page-layout.js")
                }
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
            __key: "pages"
        }
    ]
};
