---
title: Intro to HTML
---

by [Michael Fehrenbach](https://michaelfehrenbach.com/)<br>
with [Laurel Schwulst](https://www.laurel.world/), [Sasha Portis](https://sashaportis.com/)

---

## HTML stands for *HyperText Markup Language*

HTML is the standard markup language/format for creating web pages, containing the content and structure of a page as a series of tags/elements.

* [HTML | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) \
  *When in doubt, refer to the MDN documentation!*

* [Basics of HTML](https://www.youtube.com/watch?v=CkzbI1Tv_rQ) \
  *A very calming introduction by Laurel Schwulst.*

* [Organizing Files for the Web](https://docs.google.com/presentation/d/101TEdtacOFZhCwebijcJaX0h1BpDwhAm2SJhE3jW89c/edit#slide=id.g331f24f572_4_0) \
  *Sasha Portis on (web) file-naming, for when you get to saving.*

HTML is the *skeleton* of the web. At its most basic it is a text file, in a folder on a computer, with a `.html` extension.

This format was codified by our pal [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) in 1991, evolving from his earlier [SGML](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language), a similar/<wbr>proto language. There have been five major revisions to the spec since then, which added (and sometimes *deprecated*, or removed) tags and syntax:

- HTML 1, 1991
- HTML 2, 1995
- HTML 3, 1997
- HTML 4, 1997 (busy year)
- HTML 5, 2014


## The basic document

HTML consists of a [range of elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), nested inside one another, like a [matryoshka doll](https://en.wikipedia.org/wiki/Matryoshka_doll) of text.

*As a visual:*

{% include figure.html src='nesting.svg' %}

*As code:*

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </body>
</html>
```

The `<html>` element contains all elements of the page, the `<head>` element contains the title, and the body contains `<h1>` and `<p>`.

We call these [*semantic* elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)—which is saying that they give their contents a *meaning* or a *role*. These *roles* are then interpreted by your browser (Chrome, Safari, Firefox, etc.) when it loads the file, to ultimately display the page. We call this *parsing* the document.

> *The Semantic Web* is not a separate Web but an extension of the current one, in which information is given well-defined meaning, better enabling computers and people to work in cooperation.
{: .quote }

<cite>[Tim Berners-Lee](https://www.lassila.org/publications/2001/SciAm.pdf)</cite>

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

{% capture aside %}
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </body>
</html>
```
{% endcapture %}

{% include aside.html content=aside sticky=true rows="2" %}

We use semantic elements to help structure and describe our content—but also for accessibility (screen readers)—where the tag type helps indicate what things are.


## What are elements?

[Elements](https://developer.mozilla.org/en-US/docs/Glossary/Element) are composed of tags (opening, closing) and their content:

{% include figure.html src='tag.svg' %}

Some elements do not have any content or children, like `<br>` or `<img>`. These are called [*empty elements*](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element) and do not have a closing tag.

### Common elements

- `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>` for headings

```html
<h1>There should only be one first-level heading!</h1>
```
*TBH, you'll probably never need h4–h6.*

- `<p>` for paragraphs

```html
<p>You should always wrap your text in a paragraph!</p>
```

- `<a>` are links

  The `href` (*H*ypertext *REF*erence) specifies a URL that the link points to, and the tag wraps the visible link text. The `href` can point to another, local HTML file (living in the same directory structure) or an external page. They can also point to specific parts of a page.

```html
<a href="https://www.example.com">Links need attributes!</a>
```

- `<img>` are images

  The `src` likewise can point to a local image file or an external URL! `alt` provides a description for accessibility/screen readers.

```html
<img src="example.jpg" alt="Images should have descriptions!">
```

- `<header>` `<footer>` `<nav>` `<main>` `<article>` `<section>` `<div>` define areas

  These are the structural containers of a website. The names don’t imbue meaning or function directly, but help us organize and think about our content structure. (And again, are helpful for accessibility.)

```html
<body>
  <header>
    <!-- A header. -->
  </header>
  <main>
    <!-- Your main content. -->
  </main>
  <footer>
    <!-- The footer. -->
  </footer>
</body>
```

- `<span>` `<strong>` `<em>` wrap around bits of text

```html
<p>You may have noticed I like using <em>emphasis</em>.</p>
```

- `ol` `ul`, and `li` build lists

```html
<ul>
  <li><!-- A list item. --></li>
  <li><!-- Another. --></li>
  <li><!-- A third. --></li>
</ul>
```

There are [many, many HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), all with particular uses. (We’ll unpack some more, below.)


## Attributes

All HTML elements can have [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes), which provide more information about the element:

{% include figure.html src='attr.svg' %}

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


## Case, whitespace, tabs, line breaks

HTML doesn’t care about capitalization, extra white space, or line breaks. The browser will just read everything from left to right, as if it is one long, running sentence. So the shouty `<HTML>` and quieter `<html>` are interpreted the same.

The browser parses both of these in the exact same way:
{: .two-above .one-below }

```html
<body>
  <h1>Dog Breeds</h1>
  <p>There are many kind of dog breeds</p>
  <ul>
    <li>German Shepherd</li>
    <li>Bulldog</li>
    <li>Poodle</li>
  </ul>
</body>

<BODY><h1>Dog Breeds</h1><p>There are many kind of
dog breeds</p><UL><li>German Shepherd</li>
<li>Bulldog</li><LI>Poodle</li></UL></body>
```

But obviously, the first one is much more readable to us humans. We can use whitespace, tabs/indenting, and line breaks to make it easier for us to read the code. There are a lot of common patterns used—like indenting to indicate hierarchy/nesting. In HTML, spaces are code *ergonomics* for you—just like a good chair or desk, that allow you to work more comfortably.

> Code is read more often than it is written. Code should always be written in a way that promotes readability.

<cite>[Guido van Rossum](https://peps.python.org/pep-0008/)</cite>


## Block elements

[Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) always start on a new line, and take up the full width available—stretching out to the left and right of their parent/container. They stack on top of each other. Importantly, block elements can have a top and bottom margin, unlike inline elements.

Earlier, we talked about area-defining elements. All of these area-defining elements are also block elements:

```html
<header> <footer> <nav> <main> <section> <div>
```

The heading elements (`<h1>`, etc.), and `<p>` tags are also block-level.

All of the above, in typical use:

```html
<!DOCTYPE html>
<html>

  <head>
    <title>Block elements</title>
  </head>

  <body>

    <header>
      <h1>My Website</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <section id="about">
      <h2>About Me</h2>
      <p>I am a designer currently studying at Parsons.</p>
    </section>

    <footer>
      <a href="https://my-instagram-link">Instagram</a>
      <a href="/contact">Contact Me</a>
    </footer>

  </body>

</html>
```

{% include figure.html src="block-level.png" caption="As said earlier in the lecture, HTML is the skeleton and content of a page. It won't look like much without CSS." %}

## Inline elements

[Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) do *not* start on a new line, and only take up as much width as necessary. I like to think of these as the little metal slugs [from printing](https://en.wikipedia.org/wiki/Slug_(typesetting)). Other text and inline elements will continue to flow around them, and they can wrap to new lines:

`<a>`
`<em>`
`<img>`
`<span>`

{% include figure.html src='/example/inline/demo' height='32rem' %}

`<img>` is a weird one here. Typically `<img>`s are modified to be block-level through CSS.


## Lists

Any time you have more than two of something, you probably have [a list](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists). These are commonly used for semantic navigation elements, as well, think *“here’s a list of links in this site.”*


## Details / Summary

There is even some basic interactivity (way, way ahead of JavaScript) with [*details disclosure*](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) elements that open and close.

Again, there are [many, many, many, many HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Try and find the one that best fits your usage, wherever possible using a *semantic* element that fits your content.


## Comments

You can *comment* part of the code and the browser won’t show it. [Comments](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments) are often used to explain your thinking, organize your code, “turn off” a bit of code, or hide whatever you’d like.

{% include figure.html src='/example/comment/demo' caption='Keep in mind these are still readable in the *source*.' height='25.4rem' %}

I highly recommend getting into a habit of commenting your code, especially when starting out. If you figure something tricky out, write down why and how you solved it to help you understand and remember. And you’ll often come back to things. Commenting your code is a gift to your future self!


## *User-agent* styles

We haven’t applied any styles/CSS here yet, so everything we see in these examples is based on [*user-agent* stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#user-agent_stylesheets)—that is, each browser’s own default display (and behavior) for an element type. This is what the web was, before CSS! But as a designer, rarely what you want. We’ll get into writing our own styles in the coming weeks.

> 3.2. Priority of Constituencies
>
> In case of conflict, consider users over authors over implementors over specifiers over theoretical purity. In other words costs or difficulties to the user should be given more weight than costs to authors; which in turn should be given more weight than costs to implementors; which should be given more weight than costs to authors of the spec itself, which should be given more weight than those proposing changes for theoretical reasons alone. Of course, it is preferred to make things better for multiple constituencies at once.

<cite>[W3C, HTML Design Principles](https://www.w3.org/TR/html-design-principles/#priority-of-constituencies)</cite>
