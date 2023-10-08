---
layout: example
---

{% capture markup %}
<section>
  <nav class="nav">
    <div class="nav-left">My Site</div>
    <div class="nav-right">About</div>
  </nav>

  <nav class="nav-shorter">
    <div class="nav-left">My Site</div>
    <div class="nav-right">About</div>
  </nav>
</section>
{% endcapture %}

{% capture code %}
```css
.nav {
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 10px;
}

.nav-shorter {
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 50%;
}
```
```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
