---
layout: example
---

{% capture markup %}
<h1>Pseudo-elements are clever</h1>
<p>The first letter of this paragraph will be red, and the first line maroon, no matter where it wraps or how long it ends up being.</p>
<blockquote>
  You can use these to <a href="https://newschool.edu">embellish links</a>
</blockquote>
{% endcapture %}

{% capture code %}

```css
/* inserted before the heading */
h1:before {
  color: red;
  content: ' ••• ';
}

/* inserted after the heading */
h1:after {
  color: blue;
  content: ' * ~ * ';
}

p:first-letter {
  color: gold;
  font-size: 6em;
  font-weight: bold;
}

p:first-line {
  color: dodgerblue;
}

/* A practical case – outward arrow after external links. */
a[href^='https://']:after {
  content: ' ↗';
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
