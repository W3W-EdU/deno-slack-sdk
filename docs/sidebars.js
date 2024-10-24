/**
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  sidebarJSBolt: [
    {
      type: 'doc',
      id: 'index', // document ID
      label: 'Deno Slack SDK', // sidebar label
      className: 'sidebar-title',
    },
    'getting-started',
    'create-app',
    'app-manifest',
    {
      type: 'category',
      label: 'Functions',
      items: [
        'functions/function-types',
        'functions/slack-functions',
        'functions/custom-functions',
        'functions/custom-function-access',
        'functions/calling-slack-api-methods',
        'functions/external-authentication',
      ],
    },
    'workflows',
    {
      type: 'category',
      label: 'Triggers',
      items: [
        'triggers/triggers-overview',
        'triggers/link-triggers',
        'triggers/scheduled-triggers',
        'triggers/event-triggers',
        'triggers/webhook-triggers',
        'triggers/manage-triggers',
      ],
    },
    {
      type: 'category',
      label: 'Datastores',
      items: [
        'datastores/datastores',
        'datastores/datastores-add',
        'datastores/datastores-retrieve',
        'datastores/datastores-delete',
      ],
    },
    {
      type: 'category',
      label: 'Datatypes',
      items: [
        'datatypes/message-metadata-events',
        'datatypes/slack-types',
        'datatypes/custom-types'
      ],
    },
    'team-collaboration',
    {
      type: 'category',
      label: 'Interactivity',
      items: [
        'interactivity/interactivity-overview',
        'interactivity/creating-a-form',
        'interactivity/creating-an-interactive-message',
        'interactivity/creating-an-interactive-modal',
      ],
    },
    {
      type: 'category',
      label: 'Testing & deploying',
      items: [
        'testing-and-deployment/local-development',
        'testing-and-deployment/deploy-to-slack',
        'testing-and-deployment/security-best-practices'
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'testing-and-deployment/permissions-control-for-admins',
        'governing-slack-connect-invites',
      ],
    },
    {
      type: 'category',
      label: 'Deno & TypeScript',
      items: [
        'deno/install-deno',
        'deno/develop-with-deno',
        'deno/typescript-overview'
      ],
    },
    { type: 'html', value: '<hr>' },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'reference'
      ],
    },
    { type: 'html', value: '<hr>' },
    'reference',
    'reference',
    { type: 'html', value: '<hr>' },
    {
      type: 'link',
      label: 'Slack CLI',
      href: 'https://github.com/slackapi/deno-slack-sdk/releases',
    },
    {
      type: 'link',
      label: 'Release notes',
      href: 'https://github.com/slackapi/deno-slack-sdk/releases',
    },
    {
      type: 'link',
      label: 'Code on GitHub',
      href: 'https://github.com/SlackAPI/deno-slack-sdk',
    },
    {
      type: 'link',
      label: 'Contributors Guide',
      href: 'https://github.com/SlackAPI/deno-slack-sdk/blob/main/.github/contributing.md',
    },

  ],
};

export default sidebars;