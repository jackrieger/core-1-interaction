---
layout: example
---

{% capture markup %}
<section>
  <div class="container-1">
    <div class="element"></div>
    <div class="element"></div>
  </div>

  <div class="container-2">
    <div class="element"></div>
    <div class="element"></div>
  </div>

  <div class="container-3">
    <div class="element"></div>
    <div class="element"></div>
  </div>
</section>
{% endcapture %}

{% capture code %}
```css
.container-1 {
  align-items: center;
  background-color: lightpink;
  display: flex;
  flex-direction: row; /* default setting; does not need to explicitly be set */
  height: 150px;
  justify-content: space-evenly;
  margin-bottom: 25px;
}

.container-2 {
  align-items: center;
  background-color: lightpink;
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: space-between;
}

.container-3 {
  align-items: center;
  background-color: lightpink;
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: space-between;
}

.element {
  background-color: dodgerblue;
  height: 50px;
  width: 50px;
}

```
```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
