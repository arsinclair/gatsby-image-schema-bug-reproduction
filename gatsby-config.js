const { ImgixSourceType } = require("@imgix/gatsby");

module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "data/images.json"
            }
        },
        "gatsby-transformer-json",
        {
            resolve: "@imgix/gatsby",
            options: {
                domain: "assets.imgix.net",
                sourceType: ImgixSourceType.AmazonS3,
                fields: [
                    {
                        nodeType: "ImagesJson",
                        getURL: (node) => node.url,
                        fieldName: "image"
                    }
                ]
            }
        }
    ]
}