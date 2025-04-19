---
sidebar_position: 2
---

# Feature 2: Customization Options

Learn how to customize your Docusaurus site.

## Theme Customization

### Colors
You can customize your site's colors by modifying the CSS variables:
```css
:root {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: rgb(33, 175, 144);
  --ifm-color-primary-darker: rgb(31, 165, 136);
}
```

### Typography
Change fonts and text styles:
```css
:root {
  --ifm-font-family-base: 'Your Font', system-ui;
  --ifm-font-size-base: 16px;
}
```

## Layout Options

### Navbar Configuration
Customize your navigation bar:
```javascript
navbar: {
  title: 'My Site',
  logo: {
    alt: 'My Logo',
    src: 'img/logo.svg',
  },
  items: [
    // Add your navigation items here
  ],
}
```

### Footer Setup
Configure your site's footer:
```javascript
footer: {
  style: 'dark',
  links: [
    // Add your footer links here
  ],
}
```

## Advanced Customization

### Custom Components
Create your own React components:
```jsx
function MyComponent() {
  return (
    <div>
      <h1>Custom Component</h1>
      <p>This is a custom component!</p>
    </div>
  );
}
```

### Plugins
Add functionality with plugins:
```javascript
plugins: [
  'my-plugin',
  [
    '@docusaurus/plugin-content-docs',
    {
      // Plugin options
    },
  ],
] 