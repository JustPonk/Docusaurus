// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: 'installation',
          label: 'Installation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'doc',
          id: 'feature1',
          label: 'Feature 1',
        },
        {
          type: 'doc',
          id: 'feature2',
          label: 'Feature 2',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          type: 'doc',
          id: 'advanced1',
          label: 'Advanced Topic 1',
        },
        {
          type: 'doc',
          id: 'advanced2',
          label: 'Advanced Topic 2',
        },
      ],
    },
  ],
};

module.exports = sidebars;
