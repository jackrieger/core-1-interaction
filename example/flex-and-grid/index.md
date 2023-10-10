---
layout: example
---

{% capture markup %}
<section>
  <div class="grid">
    <div class="column-6">
      <div class="frame flex-center">
        <div class="circle">&nbsp;</div>
      </div>
    </div>
    <div class="column-6">
      <div class="frame flex-between">
        <div class="square">&nbsp;</div>
        <div class="square">&nbsp;</div>
        <div class="square">&nbsp;</div>
      </div>
    </div>
  </div>
</section>
{% endcapture %}

{% capture code %}
```css
.grid {
  background-color: #dddddd;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 300px;
}

.column-6 {
  grid-column: span 6;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}

.frame {
  background-color: gold;
  height: 100px;
  width: 100%;
}

.circle {
  background-color: coral;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.square {
  background-color: cyan;
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
