---
layout: example
---

{% capture markup %}
<p>
  You might use these to differentiate <a href="/">an internal link</a> from an <a href="https://newschool.edu">an external one</a>, or ones for <a href="/assets/test.pdf">PDF files</a>.
</p>

<details>
  <summary>Or an open/close state for details/summary</summary>
  <p>This won’t be visible to start, but should be blue when you can see it.</p>
</details>
{% endcapture %}

{% capture code %}

```css
a {
  color: blue;
}

/* Links that start with `https://` are external. */
a[href^='https://'] {
  color: teal;
}

/* Links with `.pdf` anywhere in them. */
a[href*='.pdf'] {
  color: orange;
}

details {
  cursor: pointer;
}

/* The `open` attribute is added when you toggle. */
details[open] {
  color: blue;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">
  {{ code | markdownify }}
</div>
<div class="example">
  {{ markup }}
</div>
