---
layout: example
---

{% capture markup %}
<header>
  <h1>Combinators are handy</h1>
  <p>This paragraph should be <em>blue</em>, since it is inside the header.</p>
</header>
<p>This paragraph should be <em>gray</em>, as an immediate child of <strong>body</strong>.</p>
<p>This one should be <em>fuchsia</em> though, as it follows another paragraph.</p>
<p>Same for this one.</p>
<h2>This heading doesn’t have a style itself</h2>
<p>But will make this following paragraph <em>green</em>.</p>
<p>And this one too, still after the heading.</p>
{% endcapture %}

{% capture code %}

```css
/* The “descendant” combinator. */
/* Only paragraphs inside the header. */
header p {
  color: blue;
}

/* The “child” combinator. */
/* Only immediate children paragraphs of `body`. */
body > p {
  color: gray;
}

/* “Adjacent sibling” combinator. */
/* Only immediately preceded by another paragraph. */
p + p {
  color: fuchsia;
}

/* “General sibling” combinator. */
/* Only paragraphs following `h2`. */
h2 ~ p {
  color: lime;
}
```

```html
{{ markup }}
```
{% endcapture %}

<div class="code">{{ code | markdownify }}</div>
<div class="example">{{ markup }}</div>
