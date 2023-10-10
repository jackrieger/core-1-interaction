---
layout: example
---

{% capture markup %}
<section>
  <div class="grid">
    <div class="column-6 border">Simple two columns</div>
    <div class="column-6 border">6 columns x 2</div>
  </div>

  <div class="grid">
    <div class="column-2 border">2 col wide</div>
    <div class="column-4 border">4 col wide can go longer before breaking</div>
    <div class="column-6 border">6 col can go even longer before it has to break the line</div>
  </div>

  <div class="grid">
    <div class="column-2">Modernism</div>
    <div class="column-4 spacer"></div>
    <div class="column-6">Fusce pharetra convallis urna. Pellentesque commodo eros a enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Fusce fermentum odio nec arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</div>
  </div>
</section>
{% endcapture %}

{% capture code %}
```css
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding-left: 1rem;
  padding-right: 1rem;

  /* not related to grid */
  background-color: orange;
  font-family: sans-serif;
  margin-bottom: 25px;
  min-height: 200px;
}

.column-2 {
  grid-column: span 2;
}

.column-4 {
  grid-column: span 4;
}

.column-6 {
  grid-column: span 6;
}

.border {
  border-left: 1px solid black;
  border-right: 1px solid black;
}
```
```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
