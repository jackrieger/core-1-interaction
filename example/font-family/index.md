---
layout: example
---

{% capture markup %}
<ol>
  <li>Default serif</li>
  <li>Default sans-serif</li>
  <li>Default monospace</li>
  <li>Default cursive, you don’t see this much</li>
  <li>Default fantasy, maybe don’t do this</li>
  <li>Futura, on a Mac; Verdana, on a PC</li>
  <li>Some condensed Roboto, imported from Google Fonts</li>
  <li>This will be in Playfair, using @font-face</li>
</ol>
{% endcapture %}

{% capture code %}

```css
/* Importing from Google Fonts. These have to be at the top! */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');

/* These will depend on your user’s platform and browser. */
li:nth-child(1) {
  font-family: serif;
}

li:nth-child(2) {
  font-family: sans-serif;
}

li:nth-child(3) {
  font-family: monospace;
}

li:nth-child(4) {
  font-family: cursive;
}

li:nth-child(5) {
  font-family: fantasy;
}

/* You can also choose a specific typeface. */
li:nth-child(6) {
  font-family: 'Futura', 'Verdana', sans-serif;
}
/* But the user has to have them installed on their device. */
/* Otherwise it will “fall back” to the next/right value. */

/* The `@import` above lets you use this on any computer.  */
li:nth-child(7) {
  font-family: 'Roboto Condensed', sans-serif;
}

/* You can also host fonts along with your site files. */
@font-face {
  font-family: 'Playfair';
  src: url('playfair--regular.woff2') format('woff2');
}

/* And then reference them, as above. */
li:nth-child(8) { font-family: 'Playfair', serif; }
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
