---
layout: example
---

{% capture markup %}
<div>
  Content to show you what happens as the screen changes width.
</div>

<div>
  This is a very common occurence in which content meant to be partial width at desktop becomes full-width at mobile.
</div>
{% endcapture %}

{% capture code %}

```css
div {
  background-color: lightblue;
  font-size: 20px;
  margin-bottom: 50px;
  width: 100%;
}

/* Screens 500px wide or more */
@media (min-width: 500px) {
  div {
    background-color: lightcoral;
    font-size: 30px;
    width: 50%;
  }
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">
  {{ code | markdownify }}
</div>
<div class="example">
  {{ markup }}
</div>
