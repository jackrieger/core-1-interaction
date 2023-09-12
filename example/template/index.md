---
layout: example
---

{% capture markup %}

...

{% endcapture %}

{% capture code %}

```css
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
