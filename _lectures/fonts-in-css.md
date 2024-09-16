---
layout: lecture
permalink: :slug
published: true
title: Fonts in CSS
toc:
  - web-safe-fonts
  - embedding-a-font-file
  - referencing-a-font-file-online
  - best-practices
---

## Web-safe fonts

When styling text on the web, it's important to consider the fonts available on users' devices. Web-safe fonts are fonts commonly installed across various operating systems and browsers. Using these ensures that your text appears consistently for most users without requiring them to download additional resources.

### Common web-safe fonts

- Serif fonts:
  - Times New Roman
  - Georgia
  - Garamond
- Sans-serif fonts:
  - Arial
  - Helvetica
  - Verdana
- Monospace fonts:
  - Courier New
  - Lucida Console

### Using font stacks

To provide fallback options if a specific font isn't available, use a font stack. This is a list of fonts specified in order of preference:

```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
```

In this example, the browser tries to use "Helvetica Neue" first. If it's not available, it falls back to Arial, and finally to the default sans-serif font of the user's system.

## Embedding a font file

To use custom fonts not installed on users' devices, you can embed font files directly into your CSS using the `@font-face` rule. This rule allows you to define a custom font by specifying its name and pointing to the font file's URL:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/MyCustomFont.woff2') format('woff2'),
       url('fonts/MyCustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

For this to work, you have to include the font file within your site. After exporting it and adding it to your site folder, you can apply it like any other font:

```css
body {
  font-family: 'MyCustomFont', sans-serif;
}
```

### Font formats

Common font formats include:

- WOFF and WOFF2: Web Open Font Format, optimized for web use.
- TTF/OTF: TrueType Font and OpenType Font, standard formats.
- EOT: Embedded OpenType, primarily for older Internet Explorer versions.
- SVG: Scalable Vector Graphics font format.

WOFF and WOFF2 are recommended due to their compression and broad browser support.

## Referencing a font file online

Instead of hosting font files yourself, you can reference fonts provided by online services like Google Fonts or Adobe Fonts.

### Google Fonts

Google Fonts is a free service offering a vast library of fonts. To use a Google Font, include a `<link>` in your HTML `<head>`:

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">
</head>
```

Then apply the font in your CSS:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

Google sometimes changes how they allow you to access the font. If you're ever unsure, check out their [own documentation](https://fonts.google.com/).

### Adobe Fonts

Adobe Fonts requires an Adobe Creative Cloud subscription. After selecting fonts, Adobe provides code to include in your HTML:

```html
<head>
  <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css">
</head>
```

### Advantages of using online fonts

- Ease of use: Simple implementation without hosting font files
- Variety: Access to a large collection of fonts
- Performance: Fonts are served from optimized CDNs
- Free: doesn't cost money!

### Potential issues

- Privacy concerns: Third-party services may track user data
- Dependence on external services: If the service is down, fonts may not load
- Changing APIs: occasionally, services will change the way the font is accessed which may cause the font to fail

## Best practices

When working with fonts in CSS, keep these best practices in mind:

### Provide fallback fonts

Always include fallback fonts in your `font-family` declarations:

```css
p {
  font-family: 'Open Sans', Arial, sans-serif;
}
```

### Setting reusable font classes

A common practice is to set up font sizes in classes, then apply those to your elements instead of writing the font styles for every individual element:

<iframe height="300" style="width: 100%;" scrolling="no" title="css - font style classes" src="https://codepen.io/jackrieger/embed/bGPPNvJ?default-tab=css%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/bGPPNvJ">
  css - font style classes</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
