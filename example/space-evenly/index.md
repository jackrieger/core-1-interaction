---
layout: example
---

{% capture markup %}
<section>
  <div class="container">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>
</section>
{% endcapture %}

{% capture code %}
```css
.container {
  background: dodgerblue;
  display: flex;
  justify-content: space-evenly;
  height: 100px;
}

.child {
  background-color: fuchsia;
  height: 100%;
  width: 15%;
}
```
```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
