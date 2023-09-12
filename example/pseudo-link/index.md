---
layout: example
---

{% capture markup %}

<p>This is a paragraph with <a href="#">a link</a> in it.</p>
<p>And another one with <a href="">another link</a>.</p>

{% endcapture %}

{% capture code %}

```css
/* A link that hasn’t been visited. */
a:link {
  color: red;
}

/* After you’ve visited the link. */
a:visited {
  color: blue;
}

/* Change the color when the mouse is over it. */
a:hover {
  color: fuchsia;
}

/* And when the mouse is clicked. */
a:active {
  color: lime;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
