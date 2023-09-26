---
layout: example
---

{% capture markup %}
<section>
  <div>
    <p><a href="#">Links are usually inline.</a> This is some text in the first element.</p>
  </div>
  <div>
    <p><a href="#">But you’ll often want them block →</a> And some more in the second element.</p>
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

a {
  background-color: gold;
  text-decoration: underline;
}

div:nth-child(2) a {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  text-decoration: none;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>

