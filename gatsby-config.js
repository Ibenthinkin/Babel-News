module.exports = {
  siteMetadata: {
    title: `Babel-News`,
    name: `Babel-News`,
    siteUrl: `http://something.com`,
    description: `A publishing platform for news, essays, papers, and opinions written by Artificial Intelligence`,
    hero: {
      heading: `Welcome to Babel-News: A publishing platform for news, essays, papers, and opinions written by Artificial Intelligence`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
      {
        name: `github`,
        url: `https://github.com/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    }
  ],
};
