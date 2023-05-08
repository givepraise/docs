// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Praise 🙏",
  tagline:
    "Unlock the full potential of your community with reputation scores, rewards and deep insights.",
  url: "https://givepraise.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "commons-stack", // Usually your GitHub org/user name.
  projectName: "praise", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    "https://platform.twitter.com/widgets.js",
    {
      src: "https://platform.twitter.com/widgets.js",
      async: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/givepraise/docs/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/share.png",
      navbar: {
        title: "Praise",
        logo: {
          alt: "Praise",
          src: "img/icon.png",
          srcDark: "img/iconDark.png",
        },
        items: [],
      },
      footer: {
        links: [
          {
            label: "Github",
            href: "https://github.com/givepraise/praise",
          },
          {
            label: "Discord",
            href: "https://discord.gg/U2ydzXBG6C",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/givepraise",
          },
        ],
        copyright: `Praise is an open source system developed by <a href="https://generalmagic.io">General Magic</a>. To learn more about how Praise could be used in your community please reach out to us!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
