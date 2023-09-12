---
layout: example
---

{% capture markup %}
<li>This paragraph will be <em>dodgerblue</em>.</li>
<li>Which can also be written as <em>#1e90ff</em>.</li>
<li>Or as <em>rgb(30, 144, 255)</em>.</li>
<li>And as <em>hsl(210, 100%, 56%)</em>.</li>
<li>This has an <em>alpha</em> (transparency) value in the color.</li>
<li>Same for this one.</li>
<li>This uses a separate <em>opacity</em> property.</li>
<li>All of these work for backgrounds, too!</li>
{% endcapture %}

{% capture code %}

```css
/* There are a bunch of named colors. */
li:nth-child(1) {
  color: dodgerblue
}

/* Or you can specify a hex value. Brands love these. */
li:nth-child(2) {
  color: #1e90ff;
}

/* Or RGB for Red, Green, Blue, if you think like a screen. */
li:nth-child(3) {
  color: rgb(30, 144, 255);
}

/* Or Hue, Saturation, Lightness, which is more human. */
li:nth-child(4) {
  color: hsl(210, 100%, 56%);
}

/* RGB and HSL have a fourth value, for Alpha (transparency). */
li:nth-child(5) {
  color: rgba(30, 144, 255, 50%);
}

li:nth-child(6) {
  color: hsla(210, 100%, 56%, 0.5);
}
/* Alpha as a percentage, 0–100%, or a decimal, 0–1. */

li:nth-child(7) {
  color: dodgerblue;
  opacity: 0.5; /* This will affect everything, not just text! */
}

li:nth-child(8) {
  color: white;
  background-color: dodgerblue; /* Same for backgrounds! */
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
