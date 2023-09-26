---
layout: example
---

{% capture markup %}
<section>
  <div>
    <p>This is some text in the first element.</p>
    <p>Paragraphs are normally block-level.</p>
  </div>
  <div>
    <p>And some more in the second element.</p>
    <p>But you</p>
    <p>might want</p>
    <p>inline</p>
    <p>for tags</p>
  </div>
  <div>
    <p>Then a third one, too.</p>
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

p:not(:first-child) {
  background-color: gold;
  margin-top: 10px;
}

div:nth-child(2) p:not(:first-child) {
  display: inline;
  white-space: pre;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
