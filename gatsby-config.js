/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-chakra-boiler-plate`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
      /**
       * @property {boolean} [isBaseProvider=false]
       * if true, will render `<ChakraBaseProvider>`
       */
      isBaseProvider: false,
    },
  }
  ]
};