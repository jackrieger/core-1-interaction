---
title: Intro to CSS
---

by [Michael Fehrenbach](https://michaelfehrenbach.com/)<br>
with [Laurel Schwulst](https://www.laurel.world/)

## CSS stands for *Cascading Style Sheets*

CSS is the standard language/format for styling web pages, which specifies what the page’s HTML will look like in the browser.

* [CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) \
  *MDN, as is custom.*

* [Basics of CSS](https://www.youtube.com/watch?v=BUZIaTHm_oE) \
  *Another ASMR introduction from Laurel.*

In our ongoing analogy, CSS is the *skin* of the web. [Just like HTML](/topics/html), at its most basic it is still just text, in a file, on a computer. It can live inside HTML documents themselves, but is more commonly seen on its own with the extension `.css`

CSS came after HTML, first proposed by [Håkon Wium Lie](https://www.w3.org/Style/CSS20/history.html) in 1994—who was working with our friend Tim Berners-Lee at CERN and wanted more control over the presentation of web pages. (Tim was *against* the idea, thinking it should be up to each user.) It’s had three major revisions that have grown the vocabulary:

- CSS 1, 1996
- CSS 2, 1998
- CSS 3, 1999

*For the past decade or so, features have been added incrementally by browsers “within” the CSS 3 “standard”. That’s how it goes, these days.*

> The change in relationship between generator and consumer of information is going to take some getting used to. [...] That said, I'll comment that style sheets constitute a wormhole into unspeakable universes. People start thinking they'll just set up a little file in SGML or something else, and soon it grows [uncontrollable].

<cite>[James D. Mason](http://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-94q4.messages/0279.html)</cite>


## Where CSS lives

Before we get into CSS itself, let’s talk about how it is incorporated with HTML. There are three ways it can be added:

1. *Inline* on HTML tags themselves
1. Via `<style>` elements in HTML documents
1. As separate/external files via `<link>` elements

### 1. Inline with `style=`

This is the original and most straightforward way to add styles, directly as [*attributes*](/topic/html/#attributes) in HTML tags:

```html
<p style="color: red;">This text will be red!</p>
```

<p style="color: red;">This text will be red!</p>

Seems obvious. However this has some downsides—imagine you want to style all of your paragraphs in the same way, and with multiple properties:

```html
<p style="color: red; font-family: sans-serif;">This text will be red!</p>
<p style="color: red; font-family: sans-serif;">I’d also like this to be red.</p>
<p style="color: red; font-family: sans-serif;">And they are all sans-serif, too.</p>
```

<p style="color: red; font-family: sans-serif;">This text will be red!</p>
<p style="color: red; font-family: sans-serif;">I’d also like this to be red.</p>
<p style="color: red; font-family: sans-serif;">And they are all sans-serif, too.</p>

It makes it hard to read, and hard to change and maintain—you’d have to update every single instance. (In software, we’d refer to this as *brittle*—meaning it is easy to break.)

### 2. Along comes `<style>`

So the next way that was added to the standard was using a special HTML element, `<style>`, that wraps blocks of CSS that then apply to an entire document. They go up in the `<head>` of our [HTML documents](/topic/html/#the-basic-document):

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

The rules are written written with selectors—more on those, below. But importantly, we can now control the color of all the paragraphs easily, at once.

### 3. External with `<link>`

So this is already much better, allowing us to style whole pages easily and consistently. But what about when we have *multiple* pages? If you wanted a whole site to use the same styles, you’d have to duplicate the `<style>` tag over and over, updated it everywhere whenever you changes. Still brittle. So along comes the `<link>` element:

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

And then in a separate `style.css` file (in this case, in the same directory as our HTML file), we can have the same rules as before—no need for the outside wrapping `<style>` tag:

```css
p {
  color: red;
  font-family: sans-serif;
}
```

This will apply to any page that we add the `<link>` to, and updating the styles will now change the color of the paragraphs in our *entire web site*.

We’ll talk more about *[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)* later, but it is worth noting that the *inline* approach will usually take precedent over other methods—under the “closest, then lowest” logic.


## CSS rules

Even though it is used to style HTML elements, the syntax of CSS is very different. CSS *rules* are made up of *selectors*, used to target certain elements, and then the *declarations* that you want to apply to them:

{% include figure.html src='rule.svg' %}

The curly brackets `{` `}` (also known as *mustaches* or *handlebars*, for their shape) enclose all the declarations you want to apply to a given selector. These *declarations* are in turn made up of *properties* and *values*.

Properties are always separated from their corresponding values by a colon `:`, and each declaration line has to end in a semicolon `;`. (It’s just how it is.) Also, there are no spaces between values and their units (like `20px`)!

There are [many, many CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference). (Here is a shorter [“common” list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).)


## Ergonomics

Just [like HTML](/topic/html/#case-whitespace-tabs-line-breaks), CSS does not care about capitalization, extra white space, or line breaks. Folks generally use tabs/indenting to indicate hierarchy:

```css
p {
  color: red;
}
```

*Capitalization <em>does</em> matter when using IDs or classes as selectors, which have to match the HTML to target correctly. Like with HTML, it’s easiest just to be consistent and stick to lowercase.*


## Basic selectors

Selectors are used to *target* certain HTML elements within the page. These can get pretty complicated, but we’ll look at the three simplest and most common methods to start:

1. Elements
1. IDs
1. Classes

### 1. Element type selector

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

### 2. ID selector

You can also use an `id`, which is a kind of [special attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) that can only be used *once* in an HTML document:

```html
<div id="circle"></div>
```

```css
#circle {
  background-color: blue;
  border-radius: 50%; /* this is what makes the circle round */
  height: 100px;
  margin-top: 20px;
  width: 100px;
}
```

<div id="circle" style="
  background-color:blue;
  border-radius:50%;
  height:100px;
  margin-top: 20px;
  width:100px;
"></div>

These are prefixed by `#` in CSS, as with `#title` and `#introduction`. They can also be used as [link destinations](/topic/html/#attributes).

This will not work, as it has duplicate IDs:

```html
<div id="tree">
  <div id="branch"></div>
  <div id="branch"></div>
</div>
```

```css
#branch {
  /* which branch should I style? not sure … */
}
```

### 3. Class selector

You can then use a `class` to [target specific instances](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors). They are added as an *[attribute](/topic/html/#attributes)* on the element you want to target:

{% include figure.html src='/example/moby' height='30rem' %}

The *value* here is our class name, which we write in CSS by prefixing with a `.` as with `.highlight`.

You can use these over and over, on any kind of element. And individual elements can have *multiple* classes, too. (We’ll talk about how conflicting rules are handled, below.) Class names can be whatever you want—there are whole methodologies about what to call these things. They are the most common way to target things in CSS.


## *Fancy* selectors

### Attributes

You can use the various [attributes](topic/html/#attributes) as selectors, too. These are usually very similar to using *classes*, but can help you [differentiate things](https://css-tricks.com/attribute-selectors/) like internal and external links, for example:

{% include figure.html src='/example/attribute' height='30rem' %}

### Pseudo-classes

These are [special selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), added to `element`, `class`, or `id` which target unique *states* or *instances* of HTML elements. You’ll often see these used to target [link states](https://web.dev/learn/css/pseudo-classes/#historic-states):

{% include figure.html src='/example/pseudo-link' caption='`:hover` also works on any element, not just links!' height='30rem' %}

Other common examples have to do with [counts and positions](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes):

{% include figure.html src='/example/pseudo-child' height='30rem' %}

### Pseudo-elements

Slightly different the various [pseudo-*elements*](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements), which let you style a particular *part* of an element. You’ll most often see these as `:before` and `:after`, which let us insert things around text.

{% include figure.html src='/example/pseudo-element' height='30rem' %}

### Finally, combinators

Last, you will often want to target something based on its relationship to other elements—its *siblings* or its *parents*. For this, CSS has [*combinators*](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators), which let you relate all the various selectors we’ve learned about here together.

{% include figure.html src='/example/combinator' height='30rem' %}

Importantly, combinators can only “see” elements *before* and *above* themselves—meaning their *previous <em>(older?)</em> siblings* or their *parents*. This directionality somewhat corresponds with the *cascade*, which we’ll talk about shortly.

### `:has()` will change this!

For many, many years folks have wanted a “parent selector” in CSS—meaning a way to apply a style to a parent/container based on one of its children. This was not possible before, as we mentioned above.

CSS has [finally added](https://webkit.org/blog/13096/css-has-pseudo-class/) the `:has()` pseudo-class. It will allow us to write much simpler, logical styles:

```css
div:has(.my-child) {
  background-color: red;
}
```

This code will target the parent `<div>` that has the element `.my-child` within it (effectively targeting a *parent* based on the *child*).

Only Firefox [lacks support](https://caniuse.com/css-has), so this is safe to use in our context.


## Specificity

The first three targeting methods (`element`, `.class`, `#id`) are listed in increasing order of [*specificity*](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), meaning that a class trumps an element rule, and an ID trumps a class. IDs are thus *more specific* than classes, which are *more specific* than element selectors. (And you shouldn’t really use them, but inline styles beat them all.) Take this example:

{% include figure.html src='/example/specificity' height='30rem' %}

You could write a *long* book (and many people have) about CSS specificity—the myriad of ways that some CSS rules take precedent over others. It is often one the more frustrating parts (especially when working with legacy code that is poorly considered). Suffice it to say *it’s complicated*.

The easiest way to avoid specificity problems is generally to *stay at the same level throughout your HTML/CSS, by just using classes*.


## Oh right, the cascade

We haven’t even talked about that first *C*! Remember, it stands for [*cascading*](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade). This means that when there is a tie (like two classes applying the same property), the *lowest* rule wins—literally the one further down within a CSS document, or within a style tag. If you have multiple CSS documents with `<link>` element, the lower linked document will take precedence.

{% include figure.html src='/example/cascade' height='20rem' %}


## And inheritance

To add even more confusion, [some CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance) set on a parent also apply to their children—such as `color` or `font-family`. Most spacing/layout properties, like `width` and `margin` do not. (More on those, next week.)

This allows you to quickly set some properties globally, without having many brittle/redundant rules, as we did before:

{% include figure.html src='/example/inheritance' height='20rem' %}

All the children inherit the `body` styles.


## Color and type properties

Alright, so all this has been about *targeting* elements—what about actually styling them? Let’s introduce a few quick *properties* to get us started.

### Color!

Besides the basic examples above, [*color*](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) can be specified in a few different ways:

{% include figure.html src='/example/color' caption='There are [147 <em>named</em>](https://htmlcolorcodes.com/color-names/) CSS colors! `tomato` is a favorite.' height='30rem' %}

Named colors are quick to work with when you know a few, but `hsla` offers a more intuitive way to adjust and work with colors.

These can also all be applied to `background-color` (and `border`, but we’ll talk about that next week).

### Fonts!

Then perhaps most importantly, you’ll always be customizing your [typography](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals). Remember, the web is text *all the way down*:

{% include figure.html src='/example/font-family' height='30rem' caption='With great power comes great responsibility.' %}

Web font licensing is a *Whole Big Thing*—so let’s start out by making use of [web-safe fonts](https://www.w3schools.com/cssref/css_websafe_fonts.php) or [Google Fonts](https://fonts.google.com), which offers many *open-source* typefaces nicely packaged for web use. You can select *families* and *weights* there to easily include in your pages, as in the example above.

### Other type properties!

Once you’ve got a `font-family` in, there are additional properties to control the typography:

{% include figure.html src='/example/font' caption='For now, you can just specify units in `px` to match Figma. We’ll talk about other *absolute* and *relative* units soon.' height='30rem' %}


## Best practices

Keep in mind these demos are written to show you the breadth of possibility for CSS. They are not necessarily all the "best practice" way to do things.

One strong recommendation I have is to use classes for nearly all styles, and use descriptive names that say what the classes do. This way you can avoid clashing rules:

```css
.red-text {
  color: red;
}

.font-small {
  font-size: 14px;
  letter-spacing: 0.01em;
  line-height: 1.1;
}
```

```html
<p class="font-small red-text">
  This text would be red and small!
</p>
```

However, it's important to show you the full range of what's possible, because I don't want to limit your creativity.

## Resets

As we talked about [last week](/topic/html/#user-agent-styles), browsers have their own, built-in way that they display HTML elements. These *user-agent styles* are specific, somewhat, to each platform and each browser. This is the “look” we have been seeing when we write plain HTML without any CSS—usually Times New Roman, with blue links, and small spacing between elements.

Often, when you are working towards your own design, you will find yourself fighting against these built-in styles. Many designers/front-end folk instead start with [*resets*](https://meyerweb.com/eric/tools/css/reset/)—a semi-standard collection of CSS rules that “zero out” the browser’s built-in styles. This means you have to write everything yourself, but you have more control and aren’t building on unknown foundations. And things should be (more) consistent, across browsers and platforms.

Here is a [simple, modern one](https://elad2412.github.io/the-new-css-reset/) for your `<head>`. Download the raw file [here](https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css) and use it like so:

```html
<head>
  <link rel="stylesheet" href="reset.css"> <!-- reset default styles -->
  <link rel="stylesheet" href="style.css"> <!-- your styles -->
</head>
```
