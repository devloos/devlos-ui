import { resolve } from "path";
import { defineConfig } from "vitepress";

const PROJECT_ROOT_DIR = resolve(__dirname + "../");
console.log(PROJECT_ROOT_DIR, "HLEKJLKFDJSJDFLDJLKSFDJLFKJl");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devlos UI Documentation",
  description: "Documentation for devlos-ui",
  srcDir: "views",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(PROJECT_ROOT_DIR, "src"),
      },
    },
  },
});
