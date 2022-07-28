// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Praise 🙏',
  tagline: 'Acknowledge and reward community contributions, build a culture of giving and gratitude.',
  url: 'https://givepraise.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'commons-stack', // Usually your GitHub org/user name.
  projectName: 'praise', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/commons-stack/praise-web/tree/main',
        },
        blog: false, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/share.png',
      navbar: {
        title: 'Praise',
        logo: {
          alt: 'Praise',
          src: 'img/icon.png',
          srcDark: 'img/iconDark.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/commons-stack/praise',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            label: 'Discord',
            href: 'http://discord.link/commonsstack',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/commonsstack',
          },
        ],
        logo: {
          alt: 'Commons Stack',
          src: 'img/cs.png',
          href: 'https://commonsstack.org',
          width: 80,
          height: 80,
        },
        copyright: `Praise is an open source system developed by <a href="https://commonsstack.org">Commons Stack</a>. To learn more about how Praise could be used in your community please reach out to us!`,  
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
