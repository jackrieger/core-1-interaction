---
layout: example
---

{% capture markup %}
<p>This paragraph will be red, from the <em>element</em>.</p>
<p class="maroon">This paragraph will be maroon, from the <em>class</em>.</p>
<p>This paragraph will be red again, no <em>class</em>.</p>
<h2 class="maroon" id="intro">This heading will be blue, from the <em>ID</em>, even though it has the <em>class</em> too</h2>
<p id="warning">This paragraph will be teal, from the <em>ID</em>, beating the <em>element</em>.</p>
<p class="maroon" style="color: gray;">This paragraph will be gray, from an <em>inline style</em>, which beats everything.</p>
{% endcapture %}

{% capture code %}

```css
p {
  color: red;
}

/* Will “win” over an element selector. */
.maroon {
  color: maroon;
}

/* But IDs will supersede classes. */
#intro {
  color: blue;
}

#warning {
  color: teal;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
