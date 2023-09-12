---
layout: example
---

{% capture markup %}
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<p>This is <span>third</span> paragraph.</p>
{% endcapture %}

{% capture code %}

```css
body {
  color: gray;
  font-family: sans-serif;
}

span {
  color: blue;
  font-style: italic;
  font-weight: bold;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
