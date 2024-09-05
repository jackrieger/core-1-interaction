---
layout: lecture
permalink: :slug
published: true
title: Intro to CSS
toc:
  - what-is-css
  - where-css-lives
  - css-rules
  - basic-selectors
  - advanced-selectors
  - specificity
  - inheritance
  - examples
  - resets
---

## What is CSS?

CSS stands for *Cascading Style Sheets*. CSS is the standard language for styling web pages, which specifies what the page’s HTML will look like in the browser.

Just like HTML, it is still just text, in a file, on a computer. It can live inside HTML documents themselves, but is more commonly seen on its own with the extension `.css`


## Where CSS lives

Before we get into CSS itself, let’s talk about how it is incorporated with HTML. There are three ways it can be added:

* Inline on HTML tags themselves
* Via `<style>` elements in HTML documents
* As separate/external files via `<link>` elements

### Inline `style=`

This was the original way to add styles, directly as attributes in HTML tags:

```html
<p style="color: red;">This text will be red!</p>
```

This has some downsides. Imagine you want to style all of your paragraphs in the same way, and with multiple properties:

```html
<p style="color: red; font-family: sans-serif;">This text will be red!</p>
<p style="color: red; font-family: sans-serif;">I’d also like this to be red.</p>
<p style="color: red; font-family: sans-serif;">And they are all sans-serif, too.</p>
```

It makes it hard to read, and hard to change and maintain. You’d have to update every single instance. In software, we’d refer to this as *brittle* – meaning "easy to break". You can imagine this getting even harder to read the more properties you add.

### The `<style>` tag

So the next way that was added to the standard was using a special HTML element, `<style>`, that wraps blocks of CSS that then apply to an entire document. They go up in the `<head>` of our [HTML documents](/topic/html/#the-basic-document):

**CODEPEN**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
    <style>
      p {
        color: red;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <p>This is third paragraph.</p>
  </body>
</html>
```

The rules are written written with selectors – more on those, below. But importantly, we can now control the color of all the paragraphs easily, at once.

### External `<link>` tag

So this is already much better, allowing us to style whole pages easily and consistently. But what about when we have *multiple* pages? If you wanted a whole site to use the same styles, you’d have to duplicate the `<style>` tag over and over, updated it everywhere whenever you changes. So along comes the `<link>` element:

**CODEPEN**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <p>This is third paragraph.</p>
  </body>
</html>
```

And then in a separate `style.css` file (in this case, in the same directory as our HTML file), we can have the same rules as before – no need for the outside wrapping `<style>` tag:

**CODEPEN**
```css
p {
  color: red;
  font-family: sans-serif;
}
```

This will apply to any page that we add the `<link>` to, and updating the styles will now change the color of the paragraphs in our *entire web site*.

We’ll talk more about *[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)* later, but it is worth noting that the *inline* approach will usually take precedent over other methods – under the “closest, then lowest” logic.


## CSS rules

Even though it is used to style HTML elements, the syntax of CSS is very different. CSS *rules* are made up of *selectors*, used to target certain elements, and then the *declarations* that you want to apply to them:

{% include image.html name="rule.svg" %}

The curly brackets `{` `}` enclose all the declarations you want to apply to a given selector. These *declarations* are in turn made up of *properties* and *values*.

Properties are always separated from their corresponding values by a colon `:`, and each declaration line has to end in a semicolon `;`. Also, there are no spaces between values and their units (like `20px`)

There are [many, many CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference). Here is a shorter [“common” list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).


## Basic selectors

Selectors are used to *target* certain HTML elements within the page. These can get pretty complicated, but we’ll look at the three simplest and most common methods to start:

* Elements
* IDs
* Classes

### Element selector

If you want to change the styles for all instances of a given HTML element, you drop the `<` `>` from the tag for an element selector. These are called [*type selectors*](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors):

```css
a {
  color: blue;
  text-decoration: underline;
}

p {
  font-family: Arial;
  font-size: 20px;
}
```

### ID selector

You can also use an `id`, which is a kind of [special attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) that can only be used *once* in an HTML document:

<iframe height="300" style="width: 100%;" scrolling="no" title="id selector" src="https://codepen.io/jackrieger/embed/rNRZprX?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/rNRZprX">
  id selector</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

These are prefixed by `#` in CSS, as with `#title` and `#introduction`.


### Class selector

You can then use a `class` to [target specific instances](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors). They are added as an *[attribute](/topic/html/#attributes)* on the element you want to target:

<iframe height="300" style="width: 100%;" scrolling="no" title="class selector" src="https://codepen.io/jackrieger/embed/abMaqzZ?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/abMaqzZ">
  class selector</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

The *value* here is our class name, which we write in CSS by prefixing with a `.` as with `.highlight`.

Individual elements can have *multiple* classes, too. Class names can be whatever you want – there are whole methodologies about what to call these things, such as [BEM](https://getbem.com/introduction/), but for now just make them descriptive and consistent.

Classes are the most common way to target things in CSS. Prefer them over IDs, as they are more flexible and reusable. (You can only use an ID once, but you can use a class as many times as you want.)


## Advanced selectors

### Attributes

You can use the various HTML attributes as selectors, too. These are similar to using *classes*, but can help you [differentiate things](https://css-tricks.com/attribute-selectors/) like internal and external links, for example:

<iframe height="300" style="width: 100%;" scrolling="no" title="attribute selector" src="https://codepen.io/jackrieger/embed/WNmgMxm?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/WNmgMxm">
  attribute selector</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Pseudo-classes

These are [special selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), added to `element`, `class`, or `id` which target unique *states* or *instances* of HTML elements. You’ll often see these used to target [link states](https://web.dev/learn/css/pseudo-classes/#historic-states):

<iframe height="300" style="width: 100%;" scrolling="no" title="pseudo class" src="https://codepen.io/jackrieger/embed/eYXLVEZ?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/eYXLVEZ">
  pseudo class</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Specificity

The first three targeting methods (`element`, `.class`, `#id`) are listed in increasing order of [*specificity*](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), meaning that a class trumps an element rule, and an ID trumps a class.

IDs are thus *more specific* than classes, which are *more specific* than element selectors. (And you shouldn’t really use them, but inline styles beat them all.) Take this example:

<iframe height="300" style="width: 100%;" scrolling="no" title="css specificity" src="https://codepen.io/jackrieger/embed/abMaYrX?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/abMaYrX">
  css specificity</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

You could write a *long* book (and many people have) about CSS specificity – the myriad of ways that some CSS rules take precedent over others. It is often one the more frustrating parts (especially when working with legacy code that is poorly considered).

The easiest way to avoid specificity problems is generally to *stay at the same level throughout your HTML/CSS, by just using classes*.


## Inheritance

[Some CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance) set on a parent also apply to their children – such as `color` or `font-family`. Most spacing/layout properties, like `width` and `margin` do not.

This allows you to quickly set some properties globally, without having many brittle/redundant rules, as we did before:

<iframe height="300" style="width: 100%;" scrolling="no" title="css inheritance" src="https://codepen.io/jackrieger/embed/QWoVrLO?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/QWoVrLO">
  css inheritance</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

All the children inherit the `body` styles.


## Examples

Alright, so all this has been about *targeting* elements – what about actually styling them? Let’s introduce a few quick *properties* to get us started.

### Color

Besides the basic examples above, [*color*](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) can be specified in a few different ways:

<iframe height="300" style="width: 100%;" scrolling="no" title="css color" src="https://codepen.io/jackrieger/embed/LYaJmGP?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/LYaJmGP">
  css color</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Named colors are quick to work with when you know a few, but `hsla` offers a more intuitive way to adjust and work with colors.

These can also all be applied to `background-color` and `border`, and anywhere that accepts a color.

### Fonts

Then perhaps most importantly, you’ll usually be customizing your [typography](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals):

<iframe height="300" style="width: 100%;" scrolling="no" title="css fonts" src="https://codepen.io/jackrieger/embed/poYOVjV?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/poYOVjV">
  css fonts</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Web font licensing is a *Whole Big Thing* – so let’s start out by making use of [web-safe fonts](https://www.w3schools.com/cssref/css_websafe_fonts.php) or [Google Fonts](https://fonts.google.com), which offers many *open-source* typefaces nicely packaged for web use. You can select *families* and *weights* there to easily include in your pages, as in the example above.

### More type properties

Once you’ve got a `font-family` in, there are additional properties to control the typography:

<iframe height="400" style="width: 100%;" scrolling="no" title="css type properties" src="https://codepen.io/jackrieger/embed/MWxqGKq?default-tab=html%2Cresult&editable=true&theme-id=48523" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jackrieger/pen/MWxqGKq">
  css type properties</a> by Jack Rieger (<a href="https://codepen.io/jackrieger">@jackrieger</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Resets

Browsers have their own, built-in way that they display HTML elements. These *user-agent styles* are specific, somewhat, to each platform and each browser. This is the “look” we have been seeing when we write plain HTML without any CSS – usually Times New Roman, with blue links, and small spacing between elements.

Often, when you are working towards your own design, you will find yourself fighting against these built-in styles. Many designers/front-end folk instead start with *resets* – a semi-standard collection of CSS rules that “zero out” the browser’s built-in styles. This means you have to write everything yourself, but you have more control and aren’t building on unknown foundations. And things should be (more) consistent, across browsers and platforms.

Here is a [simple, modern one](https://elad2412.github.io/the-new-css-reset/) for your `<head>`. Download the raw file [here](https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css) and use it like so:

```html
<head>
  <link rel="stylesheet" href="reset.css"> <!-- reset default styles -->
  <link rel="stylesheet" href="style.css"> <!-- your styles -->
</head>
```

---

This lecture was originally written by [Michael Fehrenbach](https://michaelfehrenbach.com/). It has been lightly edited.
