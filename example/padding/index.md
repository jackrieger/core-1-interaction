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
  <div>
    <p>Then a third one, too.</p>
  </div>
</section>
{% endcapture %}

{% capture code %}
```css
* {
  box-sizing: border-box;
}

section {
  background-color: pink;
  padding: 20px;
}

div {
  background-color: green;
  padding: 10px;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
