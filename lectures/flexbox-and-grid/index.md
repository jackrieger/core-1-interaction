---
title: Flexbox & grid
---

The flexible box layout (flexbox) was designed as a one-dimensional layout model.

When we describe flexbox as being one-dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together.

{% include figure.html src='flexbox-row.png' %}

{% include figure.html src='flexbox-column.png' caption='Two examples of flexbox, which create both create a layout in a single direction.' %}

Think about flexbox as a way of ordering elements all within a row or column, one after another. It defines the space relationship as between elements, not beholden to an underlying grid.


## Main usage

Let's say you have a box with two elements inside that you always want to be on opposite ends of each other, no matter how wide the parent is. This is a great use case for flexbox:

{% include figure.html src='/example/space-between' height='20rem' %}

It's pretty simple. You set `display: flex;` and `justify-content: space-between;` on the parent container and that's it. This is a very common practice for menus and interface elements.

Another example might be that you have three elements in which you always want the space between them to be evenly distributed:

{% include figure.html src='/example/space-evenly' height='20rem' %}

This is just as simple, except the property you want is: `justify-content: space-evenly;`.


## Alignment

The two options for flexbox that you will make use of frequently are `align-items` and `justify-content`.

These properties will change depending on whether you have the flex container set to `flex-direction: row;` (default) or `flex-direction: column`.

Here's how they work:

| flex-direction | align-items | justify-content |
| row | controls vertical alignment | controls horizontal alignment |
| column | controls horizontal alignment  | controls vertical alignment |

So, let's say you want the items to flow in a row. In that case, `align-items` will control where the element is positioned vertically within its parent, while `justify-content` will control how it sits in the horizontal dimension:

{% include figure.html src='/example/flex-row' height='35rem' %}

And vice versa for when you set `flex-direction: column;`:

{% include figure.html src='/example/flex-column' height='35rem' %}


## Flex centering

Another very common use for flexbox is centering. For this, you set both `align-items: center;` and `justify-content: center`:

{% include figure.html src='/example/flex-center' height='22rem' %}

I would recommend this as the primary method you use to center things.


## Grid

CSS Grid is a more recent and more sophisticated system in which you can create layouts in a much more similar way as you might in design software such as InDesign.

My personal take is that the whole system is too complex and has too many options. However, limiting yourself to the useful options will allow you to make logical grid systems as you might do in your print practice. The following grid is very similar to the one I use every day in my professional practice. It does not have to be complicated.

I'm going to show you the grid system, then we will break it down:

{% include figure.html src='/example/grid' height='40rem' %}

- `display: grid;`:
  - Specifies that an element should be displayed as a grid container.
  - Allows you to create a grid layout and place child elements within it.

- `gap: 1rem;`:
  - Sets the gap or spacing between grid items in a grid container.
  - In this case, it creates a 1rem gap between grid items horizontally and vertically.

- `grid-template-columns: repeat(12, minmax(0, 1fr));`:
  - Defines the columns of the grid explicitly. The value here is the trickiest part of this.
  - `repeat(12, minmax(0, 1fr))`: This part of the property defines the columns in detail.
    - `repeat(12, ...)` specifies that you want to repeat the following column definition 12 times, creating 12 equal columns
    - `minmax(0, 1fr)`: Inside each repeated column, minmax(0, 1fr) is used to set the column's sizing behavior. It sets a minimum and maximum size for the column. The minimum size is 0. This means that even if there's no content in the column, it won't collapse to nothing; it will always have at least zero width. The maximum size is `1fr`. This is where the "fr" unit comes into play. It represents a *fraction* (fr) of the available space in the grid container. In this case, it means that each column will take up an equal fraction of the available horizontal space, dividing it evenly among the 12 columns.

- `padding-left: 1rem;` and `padding-right: 1rem;`:
  - Adds 1rem (16 pixels) of padding to the left and right sides of the grid.
  - While this isn't part of the grid explicitly, it creates the gutters to the left and the right of the grid that ensure even spacing all around:

{% include figure.html src='gutters.png' caption='1 - columns, 2 - interior gutter (gap), 3 - exterior gutter (padding on grid element)' %}

On the columns themselves, you're simply specifying how many columns the element should *span* across:

- `grid-column: span 6;` is a CSS property that is used within a grid layout.
  - instructs an element to span across a specific number of grid columns.
  - in this case, `span 6` means the element should extend and occupy a total of 6 grid columns.

In the example, I used a few different column span classes to vary the widths of the columns for a dynamic layout.

CSS Grid is a very deep rabbit hole. If you want to get deep into it, check out this guide: [CSS-Tricks: CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


## The 12-column grid system

There is a pervasive pattern in web design for grids to be 12-columns.

The concept of using a 12-column grid system in web design can be attributed to the work of Mark Boulton and Khoi Vinh. They played a significant role in popularizing this approach. Mark Boulton introduced the idea of a 12-column grid in his 2007 book "Designing for the Web." Khoi Vinh, a designer and writer, also advocated for the use of a 12-column grid system and wrote about its benefits in his blog.

{% include figure.html src='grid-presentation-0.png' %}
{% include figure.html src='grid-presentation-1.png' %}
{% include figure.html src='grid-presentation-2.png' %}
{% include figure.html src='grid-presentation-3.png' %}
{% include figure.html src='grid-presentation-4.png' caption='12 columns is simple yet flexible.' %}

A 12-column grid can be easily divided into halves, thirds, quarters, and other common fractions, making it convenient for designing complex layouts without complex calculations.

If you're curious, check out [this presentation](http://www.thegridsystem.org/pdf/grids_are_good.pdf) from around the time the concept was introducted.

This concept was further entrenched into digital design by the popular framework [Bootstrap](https://getbootstrap.com/). Bootstrap is an open-source front-end framework developed by Twitter that has become immensely popular for web development.

{% include figure.html src='bootstrap.png' %}

It is essentially a large kit of pre-built web components that many software companies use for their own products. It is important for many reasons, but its use of a 12-column grid system is one of its defining features.


## Flexbox or Grid?

I tend to think of discrete elements as use case for flexbox (such as having a div in which you want something to be centered), while the underlying system of the site's layout is governed by grid:

{% include figure.html src='/example/flex-and-grid' height='25rem' %}

Choose what makes the most sense to you. You may find that flex or grid speaks more to you and you only use one or the other. All up to you!
