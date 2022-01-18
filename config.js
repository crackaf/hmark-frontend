module.exports = {
  pathPrefix: "/hmark-frontend",
  siteUrl: "https://crackaf.github.io/hmark-frontend/",
  siteTitle: "hMark",
  siteDescription: "A FYP Site",
  author: ["Hunzlah Malik", "Arbab Hamd", "Aashar Naseem", "Usama Aslam"],
  postsForArchivePage: 3,
  defaultLanguage: "en",
  pages: {
    home: "/",
    blog: "about",
    contact: "contact",
    help: "help",
  },
  social: {
    github: "https://github.com/crackaf",
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "#",
  plugins: [`gatsby-plugin-fontawesome-css`],
};
