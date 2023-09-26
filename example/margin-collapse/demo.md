---
layout: example
---

{% capture markup %}
<section>
  <div>
    <p>This is some text in the first element.</p>
  </div>
  <div>
    <p>And some more in the second element.</p>
  </div>
</section>
{% endcapture %}

{% capture code %}
```css
div {
  background-color: deepskyblue;
  border-top: solid black 4px;
  padding: 10px;
}

div:nth-child(1) {
  margin-bottom: 40px;
}

div:nth-child(2) {
  margin-top: 40px;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
