---
layout: lecture
permalink: :slug
published: true
title: Fonts in CSS
toc:
  - web-safe-fonts
  - embedding-a-font-file
  - referencing-a-font-file-on-the-internet
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

### Example

Here's how you might apply web-safe fonts to different elements:

```css
h1 {
  font-family: Georgia, "Times New Roman", serif;
}

p {
  font-family: Arial, Helvetica, sans-serif;
}

code {
  font-family: "Courier New", Courier, monospace;
}
```

TODO: CODEPEN

## Embedding a font file

To use custom fonts not installed on users' devices, you can embed font files directly into your CSS using the `@font-face` rule.

### Using `@font-face`

The `@font-face` rule allows you to define a custom font by specifying its name and pointing to the font file's URL:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/MyCustomFont.woff2') format('woff2'),
       url('fonts/MyCustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

After defining the font, you can apply it like any other font:

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

### Example

Here's a practical example of embedding a custom font:

TODO: CODEPEN

## Referencing a font file on the internet

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

### Adobe Fonts

Adobe Fonts requires an Adobe Creative Cloud subscription. After selecting fonts, Adobe provides code to include in your HTML:

```html
<head>
  <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css">
</head>
```

### Advantages of using online fonts

- Ease of use: Simple implementation without hosting font files.
- Performance: Fonts are served from optimized CDNs.
- Variety: Access to a large collection of fonts.

### Potential issues

- Privacy concerns: Third-party services may track user data.
- Dependence on external services: If the service is down, fonts may not load.

### Example

Using Google Fonts to include the "Lato" font:

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap">
</head>
```

```css
h1 {
  font-family: 'Lato', sans-serif;
}
```

TODO: CODEPEN

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
