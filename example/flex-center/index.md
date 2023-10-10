---
layout: example
---

{% capture markup %}
<section>
  <div class="container-1">
    <div class="element"></div>
  </div>
</section>
{% endcapture %}

{% capture code %}
```css
.container-1 {
  align-items: center;
  display: flex;
  justify-content: center;

  /* not related to flex */
  background-color: springgreen;
  height: 200px;
  width: 200px;
}

.element {
  background-color: magenta;
  height: 100px;
  width: 100px;
}
```
```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
