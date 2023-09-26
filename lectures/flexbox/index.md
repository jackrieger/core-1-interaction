---
title: Flexbox
---

by [Michael Fehrenbach](https://michaelfehrenbach.com/)

---

[*Flexbox*](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox), short for *flexible boxes*—which folks will often just shorten all the way to *flex*&#8288;—is a later (mid-2010s, depending on how you count) addition to CSS. *Flex* was created to facilitate and allow CSS layouts that [*the box model*](/topic/box-model/) (with its *floats* and *position*) either made difficult, brittle, or even impossible. It is a *[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)* property.
{: .left }

- [A complete guide to flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) \
  *This page is a classic! It probably bought [Chris Coyier](https://chriscoyier.net) a house.*

- [Basic concepts of flexbox | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) \
  *Can’t go wrong.*

- [Flexbox Froggy](https://flexboxfroggy.com/) \
  *Lil’ game.*
{: .no-marker .icon-link .right rows="2" }

And let me tell you—being a web designer was a whole lot harder before *flex* came on the scene. Notice that we haven’t yet talked about vertical centering, for instance—you don’t want to know. And you don’t have to worry about it! Flex encapsulates a lot of decent design paradigms in its system.



## *Main* and *cross* axes

Flexbox is a *one-dimensional* layout system—meaning it is (usually) focused on arranging items either horizontally in rows, or vertically in columns. These are called the *axes*, and the one running in the direction of your flex items is your *main axis*. Perpendicular to this is your *cross axis*:


{% include figure.html src='axes.svg' height='100%' %}



## *Start/end*, *justify/align*

Flex also lets us position elements along the axes, in both directions&#8288;—in relation to the *start* or the *end* of the direction. For the main axis, you *justify*; for the cross axis, you *align*:

{% include figure.html src='start-end.svg' height='100%' %}

*For rows:* the default, we *justify* left/right, *align* top/bottom.
{: .half }

*For columns:* perpendicular, we *justify* top/bottom, *align* left/right.
{: .half }



## Container (parent) properties



Unlike most (…all?) of the CSS we’ve been introduced to, *flex* is applied on a *parent* element—but actually adjusts the layout of the *children*. An element with `display: flex;` is really telling you what its kids are going to be doing.

*There is also `display: inline-flex;` which behaves the same, but the parent behaves as an inline element while its children are flexing.*



### `flex-direction`

After specifying an element as *flex*, we can set its main axis with [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction). By default (you don’t have to write it) this behaves as `flex-direction: row;`, so you’ll generally only be adding it when you want something going vertical—with `flex-direction: column;` :

{% include figure.html src='/example/flex-direction/demo' caption='The first section is `display: block;` by default. Also note that I gave them all a `min-height`, to show start/end!' height='62rem' %}


### `flex-wrap`

Since flexbox is *one-dimensional*, by default it is going to try and cram everything into one <nobr>line—</nobr>even when there is not enough room! But you can tell it [to *wrap*](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) onto additional lines by adding a `flex-wrap: wrap;` property (which behaves as `flex-wrap: nowrap;` by default):

{% include figure.html src='/example/flex-wrap/demo' caption='Without the height restriction, the last one would just grow taller, by default.' height='65rem' %}

You can use this to make grids, and it is often sufficient. But but the [more recent CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) properties will give you more control! We’ll talk about `grid` soon.

There is also a *reverse* option here, which will wrap items from *end* to *start*:
{: .two-above }

{% include figure.html src='/example/flex-wrap-reverse/demo' caption='You could do some weird layouts with these, but keep in mind the order is still only visual.' height='65rem' %}



### `justify-content`

Okay, so most of what we’ve seen here is somewhat possible using *floats* and *positioning—*though not at all easily and only when you know the size/count of your content.

But [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) is where flexbox starts to allow novel layouts, by dividing up the extra/available free space elements—akin to *distribute* options in Figma/<wbr>Adobe applications. `justify-content` does this on our *main axis*:

{% include figure.html src='/example/flex-justify-content/demo' caption='The `start` / `end` values [have some nuance](https://csslayout.news/whats-the-difference-between-the-alignment-values-of-start-flex-start-and-self-start/) with different writing directions, but this rarely comes up.' height='67rem' %}

When our *main axis* is vertical, with `flex-direction: column;` :

{% include figure.html src='/example/flex-justify-content-column/demo' caption='These only works with the `height` to justify *within*&#8288;—<wbr>otherwise the container would cinch up to the content height, as usual.' height='78rem' %}



### `align-items`

And then perpendicular to *justify* along the *main axis*, flexbox has [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) to position elements along the *cross axis*. It has similar values:

{% include figure.html src='/example/flex-align-items/demo' height='66rem' %}

{% include figure.html src='/example/flex-align-items-column/demo' caption='The `align-items: baseline;` wouldn’t do anything, here.' height='69rem' %}


### `gap`, `row-gap`, and `column-gap`

While you could use *margin* to separate your flex children, it would apply to the items on the outer edges, too. (Hence all my `:not(:first-child)` selectors, in examples.) Flex recently gained support for intuitive [gap properties](https://developer.mozilla.org/en-US/docs/Web/CSS/gap), which fix this problem—by applying spacing only *between* children.

This is particularly helpful with dynamic, wrapping content and responsive designs—where you won’t always know which element ends or starts a line (to take their margin off):

{% include figure.html src='/example/flex-gap/demo' caption='Note the last one, `gap` are really *minimums* and only apply when there isn’t otherwise space.' height='83rem' %}

Note that the `justify`, `align`, and `gap` properties are also shared (in name and behavior) with `display: grid;`, when we get there!



## Item (child) properties



Flexbox is *usually* applied on the parent/container. But once you’ve set `display: flex;` on an element, there are also some individual override properties that can be given to its children, *flex items*.



### `order`

Kind of like the *reverse* properties—you can individually [apply an order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) to a *flex item* (child). Items with the same/tied order (like everything with the default of `order: 0;`) will be displayed in their DOM/source order:

{% include figure.html src='/example/flex-order/demo' caption='With the last one, since the default is `order: 0;`, negative numbers move stuff up to the front!' height='52rem' %}

Other order selectors (like `:first-child`) won’t be fooled by this reordering—as you can see, I used them here. They still use the DOM order. And again, this change is only visual—so don’t use it when screen reader/content sequence accessibility is a concern!



### `flex-grow` and `flex-shrink`

These tell the child items to… [grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) or [shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink), if necessary—defining the amount of available/remaining space in the container an element should take up. (I like to think of these as bento boxes.)

It takes a *unitless* proportional value (think fractions or a factor/multiplier). If you give one flexed child `flex-grow: 1;` it will take up all the extra space; another element with `flex-grow: 2;` would then take twice as much of that space as the first one (the available space with 3 total units):

{% include figure.html src='/example/flex-grow-shrink/demo' height='74rem' %}

And `flex-shrink` works the same way—defining what proportion an element should shrink when forced to by the flex layout. The most use you’ll see of this is `flex-shrink: 0;`, which tells all the *other* items to shrink instead!


### `align-self`

Finally, we have an individual override for an [align-items](#align-items) property set on the parent—which adjusts (with the same keywords/values) the alignment of the *specific* child item it is applied to"

{% include figure.html src='/example/flex-align-self/demo' height='60rem' %}



> This is a lot of stuff! Flex can be tough to wrap one’s head around, but it is *so much better* than float and width and margin shenanigans. Much of what you look at on the web is laid out in flex (and its sort-of successor which I keep hinting at, *grid*).
{: .callout icon='😵‍💫' }
