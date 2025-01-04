import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devlos UI",
  description: "Documentation for devlos-ui",
  cleanUrls: true,
  base: "/",
  srcDir: "src",
  head: [
    ["link", { rel: "icon", href: "devlos-ui-favicon.png" }],
    ["meta", { name: "author", content: "Carlos Aguilera" }],
    ["meta", { property: "og:title", content: "Devlos UI" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Beautifully designed components to add to your projects",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:creator", content: "@devlos" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "devlos-ui-favicon.png",
        sizes: "180x180",
      },
    ],
  ],
  themeConfig: {
    editLink: {
      pattern: "https://github.com/devloos/devlos-ui",
      text: "Suggest changes to this page",
    },

    footer: {
      copyright: "Copyright © 2024-Present Carlos Aguilera",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Introduction", link: "/guide/introduction" },
      { text: "Get Started", link: "/guide/get-started" },
      { text: "Usage", link: "/guide/usage" },
    ],

    logo: "devlos-ui-favicon.png",

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Get Started", link: "/guide/get-started" },
          { text: "Usage", link: "/guide/usage" },
        ],
      },
      {
        text: "Components",
        items: [{ text: "Drag Select", link: "/components/drag-select" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/devloos/devlos-ui" },
    ],

    search: {
      provider: "local",
    },
  },
});
