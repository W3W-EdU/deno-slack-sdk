// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Slack Developer Tools',
  tagline: 'Official frameworks, libraries, and SDKs for Slack developers',
  favicon: 'img/favicon.ico',

  url: 'https://tools.slack.dev',
  baseUrl: '/deno-slack-sdk/',
  organizationName: 'slackapi',
  projectName: 'deno-slack-sdk',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'content',
          breadcrumbs: false,
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/slackapi/deno-slack-sdk/tree/main/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-9H1YZW28BG',
        },
      }),
    ],
  ],

themes: ["docusaurus-json-schema-plugin"],

plugins:
['docusaurus-theme-github-codeblock',
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/getting-started',
          from: ['/tutorial/getting-started'],
        },
      ],
    },
  ],
  // [
  //   'docusaurus-plugin-typedoc',
  //   {
  //     id: 'generate-add-bookmark',
  //     entryPoints: ['../src/schema/slack/functions/add_bookmark.ts'],
  //     out: "./content/functions/generate-add-bookmark",
  //     skipErrorChecking: true,
  //     useCodeBlocks: true,

  //     compilerOptions: {
  //         allowImportingTsExtensions: true
  //       }
  //   },
  // ],
  
],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Slack Developer Tools",
        logo: {
          alt: 'Slack logo',
          src: 'img/slack-logo.svg',
          href: 'https://tools.slack.dev',
          target : '_self'
        },
        items: [
          {
            type: 'dropdown',
            label: 'Bolt',
            position: 'left',
            items: [
              {
                label: 'Java',
                to: 'https://tools.slack.dev/java-slack-sdk/guides/bolt-basics',
                target: '_self',
              },
              {
                label: 'JavaScript',
                to: 'https://tools.slack.dev/bolt-js',
                target: '_self',
              },
              {
                label: 'Python',
                to: 'https://tools.slack.dev/bolt-python',
                target: '_self',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'SDKs',
            position: 'left',
            items: [
              {
                label: 'Java Slack SDK',
                to: 'https://tools.slack.dev/java-slack-sdk/',
                target: '_self',
              },
              {
                label: 'Node Slack SDK',
                to: 'https://tools.slack.dev/node-slack-sdk/',
                target: '_self',
              },
              {
                label: 'Python Slack SDK',
                to: 'https://tools.slack.dev/python-slack-sdk/',
                target: '_self',
              },
              {
                label: 'Deno Slack SDK',
                to: 'https://tools.slack.dev/deno-slack-sdk/',
                target: '_self',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Community tools',
                to: 'https://tools.slack.dev/community-tools',
                target: '_self',
              },
              {
                label: 'Slack Community',
                to: 'https://slackcommunity.com/',
                target: '_self',
              },
            ]
          },
          {
            to: 'https://api.slack.com/docs',
            label: 'API Docs',
            target: '_self',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            'aria-label': 'GitHub Repository',
            'className': 'navbar-github-link',
            'href': 'https://github.com/slackapi/deno-slack-sdk',
            'position': 'right',
            target: '_self',
          },
        ],
      },
      footer: {
        copyright: `<p> Made with ♡ by Slack and pals like you <p>`,
      },
      prism: {
        // switch to alucard when available in prism?
        theme: prismThemes.github, 
        darkTheme: prismThemes.dracula,
      },
        codeblock: {
            showGithubLink: true,
            githubLinkLabel: 'View on GitHub',
        },
      // announcementBar: {
      //   id: `announcementBar`,
      //   content: `🎉️ <b><a target="_blank" href="https://api.slack.com/">Version 2.26.0</a> of the developer tools for the Slack automations platform is here!</b> 🎉️ `,
      // },
    }),
};

export default config;