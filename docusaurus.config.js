// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const siteName = 'Frontend Dairy'
const siteUrl = 'frontenddairy.com'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteName,
  tagline: 'Everything about the amazing web technology.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${siteUrl}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lcssptz', // Usually your GitHub org/user name.
  projectName: 'frontend-diary', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: siteName,
        logo: {
          alt: siteName,
          src: 'img/logo.svg',
        },
        items: [
          { to: '/', label: 'Diary', position: 'left' },
          {
            type: 'doc',
            docId: '/category/algorithms',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/lcssptz/frontend-diary',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Algorithms',
                to: '/docs/category/algorithms',
              },
              {
                label: 'Tutorials',
                to: '/docs/category/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Dev',
                href: 'https://dev.to/lcssptz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dairy',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lcssptz/frontend-diary',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${siteName}, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
