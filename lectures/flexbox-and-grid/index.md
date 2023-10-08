---
title: Flexbox & grid
---

The flexible box layout (flexbox) was designed as a one-dimensional layout model.

When we describe flexbox as being one-dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together.

{% include figure.html src='flexbox-row.png' caption='' %}

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

In practice:

## Flexbox or Grid?

## Properties

There are many properties of flexbox, but there are a select few that are useful for almost all of your needs.
