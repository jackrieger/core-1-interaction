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
  <div>
    <p>Let’s add a fourth.</p>
  </div>
  <div>
    <p>Even a fifth.</p>
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

div:not(:first-child) {
  margin-top: 20px;
}

div:nth-child(3) {
  background-color: gold;
  position: sticky;
  right: 30px;
  top: 30px;
  width: 66%;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
