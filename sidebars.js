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
module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🚀 Bienvenida'
    },
    {
      type: 'category',
      label: '🎓 Primeros Pasos',
      items: [
        'getting-started/instalacion',
        'getting-started/primeros-pasos',
        'getting-started/interfaz-basica',
        'getting-started/atajos-teclado'
      ]
    },
    {
      type: 'category',
      label: '🔧 Herramientas DevTools',
      items: [
        'devtools/intro',
        'devtools/elements',
        'devtools/styles',
        'devtools/console',
        'devtools/sources',
        'devtools/network'
      ]
    },
    {
      type: 'category',
      label: '💡 Conceptos Básicos',
      items: [
        'basic/elementos-dom',
        'basic/debugging',
        'basic/devices'
      ]
    },
    {
      type: 'category',
      label: '🎮 Tutoriales',
      items: [
        {
          type: 'category',
          label: '🌟 Tutorial Básico',
          items: [
            'tutorial-basics/create-a-page',
            'tutorial-basics/create-a-document',
            'tutorial-basics/create-a-blog-post',
            'tutorial-basics/markdown-features',
            'tutorial-basics/deploy-your-site',
            'tutorial-basics/congratulations'
          ]
        },
        {
          type: 'category',
          label: '⭐ Tutorial Extra',
          items: [
            'tutorial-extras/manage-docs-versions',
            'tutorial-extras/translate-your-site'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '🚀 Características',
      items: [
        'feature1',
        'feature2'
      ]
    },
    {
      type: 'category',
      label: '🏆 Nivel Avanzado',
      items: [
        'advanced1',
        'advanced2'
      ]
    }
  ]
};
