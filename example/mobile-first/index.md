---
layout: example
---

{% capture markup %}
<div>
  Only change what you need to in breakpoint media queries.
</div>

<div>
  Things like font-family are likely to stay consistent (unless you have a particular design idea to change the font as the screen scales).
</div>
{% endcapture %}

{% capture code %}

```css
div {
  font-family: arial;
  font-size: 20px;
  margin-bottom: 20px;
  width: 100%;
}

/*
  font-family doesn't need to change, so we don't write anything
  font-size, margin size, and width commonly change:
*/
@media (min-width: 800px) {
  div {
    font-size: 30px;
    margin-bottom: 50px;
    width: 50%;
  }
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
