---
layout: example
---

{% capture markup %}
<div>
  <p>This should be blue.</p>
  <p>Standard black, here.</p>
  <p>Also black.</p>
  <p>This one is purple!</p>
  <p>Back to black.</p>
  <p>This will be fuchsia.</p>
</div>
<div>
  <p>This should be red.</p>
</div>
{% endcapture %}

{% capture code %}

```css
/* The paragraph is the first descendent of its parent. */
p:first-child {
  color: blue;
}

/* Paragraphs that are the 4th children. */
p:nth-child(4) {
  color: purple;
}

/* Last one. */
p:last-child {
  color: fuchsia;
}

/* Only one. */
p:only-child {
  color: red;
}

/* You can invert these, too. */
div:not(:first-child) {
  background-color: lightgray;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
