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
      type: 'doc',
      id: 'intro',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Basics',
      items: [
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-page',
          label: 'Create a Page',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-document',
          label: 'Create a Document',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-blog-post',
          label: 'Create a Blog Post',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/markdown-features',
          label: 'Markdown Features',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          type: 'doc',
          id: 'tutorial-extras/manage-docs-versions',
          label: 'Version Management',
        },
        {
          type: 'doc',
          id: 'tutorial-extras/translate-your-site',
          label: 'Translation',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/deploy-your-site',
          label: 'Deployment',
        },
      ],
    },
    {
      type: 'doc',
      id: 'tutorial-basics/congratulations',
      label: '🎉 Congratulations!',
    },
  ],
};

module.exports = sidebars;
