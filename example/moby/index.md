---
layout: example
---

{% capture markup %}
<div id="chapter-1" class="chapter">
  <p>
    Call me <span class="highlighted">Ishmael</span>. Some years ago—never mind how long precisely—having little or no
    <span class="money">money in my purse</span>, and nothing particular to interest me on shore, I thought I would
    sail about a little and see the <span class="water">watery</span> part of the world.
  </p>
</div>
{% endcapture %}

{% capture code %}

```css
.chapter {
  font-family: helvetica, arial, sans-serif;
  font-size: 17px;
}

.highlighted {
  background-color: yellow;
}

.money {
  border: dotted 1px currentcolor;
  color: green;
}

.water {
  color: dodgerblue;
  font-style: italic;
  letter-spacing: 0.1em;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
