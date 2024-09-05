---
layout: lecture
permalink: :slug
published: true
title: Intro to HTML
toc:
  - what-is-html
  - the-basic-document
  - html-elements
  - attributes
  - block-elements
  - inline-elements
  - tags
  - the-index-file
---

## What is HTML?

Hypertext Markup Language (HTML) is the standard markup language/format for creating web pages, containing the content and structure of a page as a series of tags/elements.

HTML is the *skeleton* of the web. At its most basic it is a text file, in a folder on a computer, with a `.html` extension.


## The basic document

HTML consists of a [range of elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), nested inside one another.

*As a visual:*

{% include image.html name="nesting.svg" %}

*As code:*

<iframe height="300" style="width: 100%;" scrolling="no" title="html - skeleton" src="https://codepen.io/jackrieger/embed/jOjeYod?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/jOjeYod">
  html - skeleton</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

The `<html>` element contains all elements of the page, the `<head>` element contains the title, and the body contains `<h1>` and `<p>`.

We call these [*semantic* elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)—which is saying that they give their contents a *meaning* or a *role*. These *roles* are then interpreted by your browser (Chrome, Safari, Firefox, etc.) when it loads the file, to ultimately display the page. We call this *parsing* the document.

*In our example, here is what we’ve told the computer:*

- `<!DOCTYPE html>` \
  What kind of file this is, so it knows how to parse it. \
  *This is not necessary in CSS or JS files.*

- `<html>` \
  The root element of an HTML page, containing all the content.

- `<head>` \
  The *meta* information about the HTML page—like its title, default language, [scripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), and [stylesheets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style). \
  *Nothing in this element is visible on the page itself.*

- `<title>` \
  Specifies a [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) for the page—which is shown in the browser’s tab, and when it is shared.

- `<body>` \
  Defines the document's body—the container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

- `<h1>` \
  Defines a primary/first-level heading.

- `<p>` \
  Defines a paragraph.


## HTML Elements

[Elements](https://developer.mozilla.org/en-US/docs/Glossary/Element) are composed of tags (opening, closing) and their content:

{% include image.html name="tag.svg" %}

Some elements do not have any content or children, like `<br>` or `<img>`. These are called [*empty elements*](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element) and do not have a closing tag.


### Common elements

Headings: `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>`

Paragraphs: `<p>`

Links: `<a>`

> The `href` (*H*ypertext *REF*erence) specifies a URL that the link points to, and the tag wraps the visible link text. The `href` can point to another, local HTML file (living in the same directory structure) or an external page.

Images: `<img>`

> The `src` can point to a local image file or an external URL.

Sections of a page: `<header>` `<footer>` `<nav>` `<main>` `<article>` `<section>` `<div>`

> These are the structural containers of a website. The names don’t imbue meaning or function directly, but help us organize and think about our content structure.

<iframe height="300" style="width: 100%;" scrolling="no" title="html - common elements" src="https://codepen.io/jackrieger/embed/bGPmLdQ?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/bGPmLdQ">
  html - common elements</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Attributes

All HTML elements can have [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes), which provide more information about the element:

{% include image.html name="attr.svg" %}

### Common attributes

- The `href` attribute of `<a>` specifies the URL of the page the link goes to.

```html
<a href="https://www.example.com">Goes to example.com</a>
```

- The `src` attribute of `<img>` specifies the path to the image to be displayed, as above.

```html
<img src="example.jpg">
```

- The `alt` attribute of `<img>` provides an alternate text for an image, used by screen readers.

```html
<img src="example.jpg" alt="A description of the image.">
```

- The `id` specifies a singular, unique element on a page—for CSS targeting and anchor (scroll, “jump”) links, prepended with `#`.

```html
<h2 id="a-heading-element">A heading element</h2>

<a href="#a-heading-element">Goes to “a heading element”</a>
```

- The `class` attribute provides a selector to hook on to with CSS.

```html
<p class="warning">We’ll get into this soon.</p>
```


## Block elements

[Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) always start on a new line, and take up the full width available—stretching out to the left and right of their parent/container. They stack on top of each other. Importantly, block elements can have a top and bottom margin, unlike inline elements.

Earlier, we talked about area-defining elements. All of these area-defining elements are also block elements:

`<header>` `<footer>` `<nav>` `<main>` `<section>` `<div>`

The heading elements (`<h1>`, etc.), and `<p>` tags are also block-level.

All of the above, in typical use:

<iframe height="300" style="width: 100%;" scrolling="no" title="html - block elements" src="https://codepen.io/jackrieger/embed/qBzJxam?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/qBzJxam">
  html - block elements</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> As said earlier in the lecture, HTML is the skeleton and content of the page. It won't look like much without CSS.


## Inline elements

[Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) do *not* start on a new line, and only take up as much width as necessary. I like to think of these as the little metal slugs [from printing](https://en.wikipedia.org/wiki/Slug_(typesetting)). Other text and inline elements will continue to flow around them, and they can wrap to new lines:

`<a>` `<em>` `<img>` `<span>`

Inline elements often exist within block elements:

<iframe height="300" style="width: 100%;" scrolling="no" title="html - inline elements" src="https://codepen.io/jackrieger/embed/rNEqJjx?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/rNEqJjx">
  html - inline elements</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Tags

What is shown here could be considered the tags used most often, but there are so many different kinds of tags:

```

```

Have a look at all that are available:


## The index file

The name of an HTML file is important.

---

This lecture was originally written by [Michael Fehrenbach](https://michaelfehrenbach.com/). It has been lightly edited.
