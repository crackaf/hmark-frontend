const config = require("./config");

module.exports = [
  "gatsby-plugin-react-helmet",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-offline",
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true, // defaults to false
      jsxPragma: `jsx`, // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "HMark",
      short_name: "hmark",
      start_url: "/",
      background_color: "#304CFD",
      theme_color: "#304CFD",
      display: "standalone",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
      legacy: true, // this will add apple-touch-icon links to <head>. Required for
      // versions prior to iOS 11.3.
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "logo",
      path: `${__dirname}/src/images/logo`,
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1000,
            quality: 80,
            showCaptions: true,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            rel: "nofollow",
          },
        },
        // "gatsby-remark-prismjs",
      ],
    },
  },
  {
    resolve: "gatsby-plugin-i18n",
    options: {
      langKeyDefault: config.defaultLanguage,
      useLangKeyLayout: false,
    },
  },
  // "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-antd",
    options: {
      javascriptEnabled: true,
      typescriptEnabled: true,
    },
  },
  {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: config.googleAnalyticTrackingId,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
    },
  },
  {
    resolve: "gatsby-plugin-nprogress",
    options: {
      // Setting a color is optional.
      color: "black",
      // Disable the loading spinner.
      showSpinner: true,
    },
  },
];
