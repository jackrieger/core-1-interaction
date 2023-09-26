---
title: Box Model
---

by [Michael Fehrenbach](https://michaelfehrenbach.com/)

---

The first thing we need to understand is how CSS sizes elements. This is called the [*the box model*](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model), as everything on the web begins as a rectangle:
{: .left }

* [Introduction to CSS layout | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction) \
  *As usual.*

{% include figure.html src='box-model.svg' caption='With `box-sizing: content-box;` per the spec.' %}

By default, browsers are set to `box-sizing: content-box;` which means that the padding (and border) exists *outside* the content width or height—so padding is then an *outset.*

But this is often unintuitive and doesn’t fit with most web design patterns, so it is very common (nearly universal) to instead set this to `box-sizing: border-box;` which makes padding and border exist *inside* the content dimensions. Then padding is easier to think of as an *inset*. ([W3C](https://www.w3.org/TR/css-box-3/) probably got this default wrong. Good ol’ CSS!)

{% include figure.html src='box-model-border.svg' caption='With `box-sizing: border-box;` the defacto standard. Most [CSS resets](/topic/css#resets) will do this for you! Like I said, very common.' %}

Let’s take a look at this box, going inside-to-outside.


## Content

The *content area* is the guts of the element, usually text or an image. Its dimensions are defined by that content, but also can be specified directly via `width` or `height`.


## Padding

Next comes [*padding*](https://developer.mozilla.org/en-US/docs/Web/CSS/padding), which extends the element’s area around the content. It’s easiest to think of this as an *inset* (if we’ve made our `box-sizing` the logical `border-box`, above).

{% include figure.html src='/example/padding' height='35rem' %}

> Note: the `*` selector means "all". Only use it for this one purpose – to set `box-sizing: border-box`. You will not need to do this if using a CSS reset that does it for you.

> From here on out, all examples will assume that `box-sizing: border-box` is set.


## Margin

The last part of our box is [*margin*](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)—the space *around* an element, empty/whitespace area that is used to separate an element from its *siblings*. Like *padding* and *border*, you can specify it all around or on individual sides.

{% include figure.html src='/example/margin' height='32rem' %}

Note that [margins *collapse*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing), meaning that they are sometimes combined into a single value (the largest) between two elements. This happens most often on adjacent siblings, and is both useful and an absolute pain.

{% include figure.html src='/example/margin-collapse/demo' caption='You might expect the margin between the first two `div` to be `80px`, but it is only `40px`. They have *collapsed.*' height='26rem' %}


## And their units

Okay, so we have all these box properties—but how do we specify the dimensions? CSS has many [*length units*](https://developer.mozilla.org/en-US/docs/Web/CSS/length), used for `width`, `height`, and also  `padding`, `border`, `margin`, and even `font-size`. (Picas, anyone?) We’ll look at some common ones.

### Absolute length units

Maybe the easiest ones to understand, fixed to physical (well, sort of) sizes.

*With the many vagaries of screen size and density, the physical/ruler lengths (cm, mm, etc.) will only be correct when you print. And maybe not even then.*

```css
.pixels {
  height: 360px;
  width: 720px;
}

.inches {
  height: 5in;
  width: 10in;
}

.mm {
  height: 84mm;
  width: 400mm;
}
```

Out of these, you'll only want to use `px`.


### Relative length units

Otherwise you can use *relative* units, which depend on and respond to their context.

*These are distinctly and intrinsically <em>web</em> measurements.*

```css
/* Relative to nearest sized ancestor. */
.percentage {
  height: 90%;
  width: 85%;
}

/* Relative to viewport height/width. */
.viewport {
  height: 75vh;
  width: 80vw;
}

/* Relative to element font-size. */
.em {
  height: 1.25em; /* This will be 1.25 times the font-size */
}

/* Also relative to font size */
.ch {
  width: 1ch; /* 1ch is one letter. */
}

/* Relative to :root font-size. */
.rem {
  /*
   * 12 times the font-size of the :root.
   * Default :root font-size is 16px.
   */
  height: 12rem;
}
```

### Combine them with a `calc`

Sometimes you might want to use these together! Or otherwise do some math. For this we have the [calc function](https://developer.mozilla.org/en-US/docs/Web/CSS/calc()).
{: .half }

```css
.absolute-and-relative {
  width: calc(50% - 20px);
}

.computer-do-the-math {
  width: calc(100% / 12);
}
```

### Limit/constrain them

You’ll often want to set limits/constraints on these values—particularly with flexible, *relative* units (and *responsive design*, which we’ll talk about soon.) You can set [minimums](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width) and [maximums](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width) using the prefix `min-` and `max-`.

```css
.constrained-width {
  min-width: 200px;
  width: 50%;
  max-width: 400px;
}

.constrained-height {
  min-height: 100px;
  height: 100%;
  max-height: 200px;
}

/* Handy to watch your line lengths! */
p {
  max-width: 65ch; /* 65ish letters. */
}
```

CSS is big and massive and overwhelming and sometimes indefensibly nonsensical—but remember that you can do a surprising amount with just these basic properties! And no matter how complex it gets, it always comes back to these basics.


## Position

With an idea of how elements take up space, now we’ll look at how they exist and move together in the [*document flow*](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow). The CSS property `position` [sets this relationship](https://developer.mozilla.org/en-US/docs/Web/CSS/position).

### Static

By default, every element is *static—*just meaning its normal, stacked position in the document. This is set by default as `position: static`.

*You’ll rarely, if ever, actually set this yourself. It’s the default you change.*

### Relative

The first thing we might want to do is adjust an element *from* that normal *static* position, which we can do with *relative* positioning.

Once you have set `position: relative;` you can use the  `top`, `right`, `bottom`, and `left` values (with any of the units, above) to move the element away from its default, normal position in the flow.

{% include figure.html src='/example/position-relative/demo' caption='The element still exists/takes up space in the *flow*.' height='30rem' %}

### Absolute

*Absolute* positioning is somewhat similar to *relative—*but instead of placing an element in relation to its own default position, it uses the position of its nearest *relatively-positioned* ancestor. So it will “go up the chain” of parents and wrapper elements until it finds one set to `position: relative;`, then uses the same offset properties to move the element around.

Importantly, `position: absolute;` also *removes* the element from the normal document flow—meaning it takes up no space in the page layout.

*This is often used for exacting, specific design elements.*

{% include figure.html src='/example/position-absolute/demo' caption='The element is out of the *flow*, and placed according to the `relative` parent.' height='35rem' %}



### Fixed

*Fixed* positioning also removes the element from the document flow, but it places elements with relation to the *browser viewport*—the boundaries of the window or device.

So `position: fixed;` brings the element completely out of the page’s normal flow, like it is sitting on its own separate layer.

*This is often used for things like navigation elements.*

{% include figure.html src='/example/position-fixed/demo' height="29rem" %}

### Sticky

The most recent addition to the *position* party, `position: sticky;` elements are placed according to the normal flow of the document, like *static,* until their nearest *scrolling ancestor* (usually the viewport) moves past them. The element is then *stuck* in relation to this element.

*This is often used for headers on tables and lists.*

{% include figure.html src='/example/position-sticky/demo' caption='This always feels very *web*-y.' height='29rem' %}


## Display

In our HTML introduction we briefly talked about *block* and *inline* elements, as set by the user-agent styles. These are the first two examples of [the *display* property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

### Block

So as we discussed, most HTML elements are *block-level* by default. But you can also set `display: block;` manually on an *inline* element, too. This would mean that it starts on a new line, takes up the full width available, and you can specify a `height`, `width`, and use `margin` above and below.

{% include figure.html src='/example/display-block/demo' caption='Whenever you are linking a whole area (like an image and text together), safe bet that you want `block`.' height='36rem' %}

### Inline

And going the other way, you can make *block* elements switch to *inline* with `display: inline;`. They will no longer start on their own lines, will only take up as much space as their content/children, and don’t accept `height` and `width` properties.

{% include figure.html src='/example/display-inline/demo' caption='The `white-space` property `pre`-vents the spaces in the paragraphs from collapsing.' height='32rem' %}

### …but also `inline-block`

You can also combine the qualities of *block* and *inline* with `display: inline-block;`. These elements take `height` and `width` (and vertical `margin`) like *block-level* elements, but do not start on their own line.

{% include figure.html src='/example/display-inline-block/demo' height='40rem' %}

### And sometimes `none`

Setting `display: none;` hides an element visually from the document—as well as taking it out of the *flow*. (Keep in mind the HTML is still there, if someone opens up the source code.)

This is a common way to hide/show (by setting another *display* property) elements on the page, but it will *reflow* the document when applied—as if the element is actually added/removed from the DOM.

{% include figure.html src='/example/display-none/demo' caption='Poof. Like it wasn’t even there.' height='25rem' %}

### …vs. Visibility?

You can also hide something [visually](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility) without taking it out of the document *flow,* which is useful when you don’t want the page to jump/*reflow* when something appears/disappears. Setting `visibility: hidden;` keeps the space an element had before, but makes it invisible and unable to be interacted with. The value `visible` is the default.

{% include figure.html src='/example/visibility/demo' height='25rem' %}

### …vs. Opacity?

Another way to hide an element visually is to adjust [its opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity), which uses values on a scale from 0–1. This differs from `visibility` because elements with no (or partial) opacity can still be interacted with.

{% include figure.html src='/example/opacity/demo' caption='You can still select the text (or click links) of not-fully-opaque elements.' height='22rem' %}

Keep in mind that `display: none;`, `visibility: hidden;`, and `opacity: 0;` only hide things in the rendered browser view. The HTML is still visible in the source code!
