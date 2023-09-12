---
layout: example
---

{% capture markup %}
<p class="note">This paragraph will be gray, with just the “note” class.</p>
<p class="warning note">This paragraph will be red though, with both classes.</p>
<p class="note">This paragraph will also be gray, with just “note” again.</p>
{% endcapture %}

{% capture code %}

```css
.note {
  color: gray;
}

/* Because this is lower, it will “win” the tie. */
.warning {
  color: red;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
