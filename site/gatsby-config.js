module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "pt-BR",
    title: "John Doe",
  },
  plugins: [
    {
      resolve: "@renanc4/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
