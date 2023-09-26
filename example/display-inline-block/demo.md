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
    <p> Inline-block </p>
    <p> will give </p>
    <p> you more </p>
    <p> control </p>
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
  display: inline-block;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
  white-space: pre;
  width: 100px;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
