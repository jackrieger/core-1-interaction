---
title: Responsiveness
---

Responsiveness in CSS refers to a website's ability to adapt to various screen sizes and devices. It is achieved through a combination of flexible layout techniques, media queries, and design decisions.

One key aspect of responsiveness is fluid grids, which we've gone over in a previous lecture. Another technique is using relative units like percentages and ems to create layouts that expand or contract based on the available screen real estate (which we've also discussed). This ensures that content flows and restructures itself gracefully, maintaining a great design regardless of the device's width.

## Media queries

Media queries are another critical component of responsive design. They allow designers and developers to set specific CSS rules for different screen sizes or device characteristics, such as width, height, or orientation. By tailoring styles to different breakpoints, we can optimize the user experience on everything from small mobile screens to large desktop monitors.

It's quite simple to implement in your code:

{% include figure.html src='/example/breakpoint' height='25rem' %}

There are [many different device aspects you can target](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), but the main ones to know are `min-width` and `max-width`.

A common strategy I use is to include the breakpoint blocks at the end of the file in which they are referencing, e.g. in a stylesheet for a nav, at the bottom would come the breakpoints:

```css
/* style/nav.css */

nav {
  /* … */
}

/* rest of base styles … */

@media (min-width: 400px and max-width: 1159px) {
  /* edits needed for medium screens */
}

@media (min-width: 1200px) {
  /* edits needed for large screens */
}
```

## Mobile-first

The "Mobile-First" philosophy is an approach that prioritizes creating websites and applications for mobile devices before addressing larger screens. This philosophy has gained prominence due to the widespread use of smartphones and the increasing importance of mobile internet access.

It's a great idea in theory but in practice, many designers I've worked with start from desktop designs. It's something to keep in mind but decide for yourself how to think about it. A lot depends on the context of the website and its function, as well as your own aesthetic taste.

If you're writing stylesheets in a mobile-first manner, the base of your file would be everything as-is at mobile, and your breakpoints would scale up from there.

{% include figure.html src='/example/mobile-first' height='25rem' %}

## Common Screen Sizes - A Myth

You might be wondering what the most "common" screen sizes to use for breakpoints. The answer is, it depends on your design! See what happens at various screen sizes and adjust from there. Pre-plan out your breakpoints while you're designing.

The problem with using "common device widths" is that devices change all the time. Think how much just the iPhone has changed, and the variety of iPhone sizes available now. It would be a waste to design for a particular device like that.

Think more generally about screen widths. An example I can give you might be:

```
Small   0–499px
Medium  500–1399px
Large   1400+px
```

But again, it depends on the design. Some sites have two breakpoints, some have five or more.
