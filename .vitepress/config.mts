import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Advent Garden",
  description: "A VitePress Site",
  publicDir: "../",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        items: [
          { text: "Governance" },
          {
            text: "Polis",
            link: "/polis",
            items: [
              {
                text: "Experts & Delegation",
                link: "/polis#experts-delegation",
              },
              {
                text: "Language Models",
                link: "/polis#language-models",
              },
              {
                text: "Clustering",
                link: "/polis#clustering",
              },
              {
                text: "Real World Events",
                link: "/polis#real-world-events",
              },
            ],
          },
          { text: "Polis Deployments", link: "polis-deployments" },
          { text: "Tools" },
          { text: "Stash", link: "/stash" },
          { text: "Culture" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/raykyri/advent" },
    ],
  },
})
