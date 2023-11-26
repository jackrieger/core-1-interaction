---
title: Good Practices
---

## DRY (Don't Repeat Yourself)

Most of the good practices we'll talk about here are related to DRY.

DRY is a core principle of programming. It means that you should not repeat yourself. If you find yourself writing the same code over and over, you should find a way to write it once and reuse it.

```css
.child-1 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.5;
}

.child-2 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.5;
}

.child-3 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.5;
}
```

This is an example of repeating yourself. Don't do this. Instead, you want to make something reusable:

```css
.font-md {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.5;
}
```

Here's a JavaScript example, applying a style on hover effect to three elements:

```js
document.querySelector(".js-element-1").addEventListener("mouseenter", function () {
  document.querySelector(".js-element-1").style.color = "blue";
  document.querySelector(".js-element-1").style.fontSize = "16px";
});

document.querySelector(".js-element-2").addEventListener("mouseenter", function () {
  document.querySelector(".js-element-2").style.color = "blue";
  document.querySelector(".js-element-2").style.fontSize = "16px";
});

document.querySelector(".js-element-3").addEventListener("mouseenter", function () {
  document.querySelector(".js-element-3").style.color = "blue";
  document.querySelector(".js-element-3").style.fontSize = "16px";
});
```

There are multiple ways to DRY this. First, we're writing `document.querySelector` way too much. We can use variables:

```js
const element1 = document.querySelector(".js-element-1");
const element2 = document.querySelector(".js-element-2");
const element3 = document.querySelector(".js-element-3");

element1.addEventListener("mouseenter", function () {
  element1.style.color = "blue";
  element1.style.fontSize = "16px";
});

element2.addEventListener("mouseenter", function () {
  element2.style.color = "blue";
  element2.style.fontSize = "16px";
});

element3.addEventListener("mouseenter", function () {
  element3.style.color = "blue";
  element3.style.fontSize = "16px";
});
```

Next, we can use a function to DRY the event listener:

```js
const element1 = document.querySelector(".js-element-1");
const element2 = document.querySelector(".js-element-2");
const element3 = document.querySelector(".js-element-3");

function hover(element) {
  element.style.color = "blue";
  element.style.fontSize = "16px";
}

element1.addEventListener("mouseenter", function () {
  hover(element1);
});

element2.addEventListener("mouseenter", function () {
  hover(element2);
});

element3.addEventListener("mouseenter", function () {
  hover(element3);
});
```

Next, we can use a loop to DRY the process of adding the event listeners:

```js
const element1 = document.querySelector(".js-element-1");
const element2 = document.querySelector(".js-element-2");
const element3 = document.querySelector(".js-element-3");
const elements = [element1, element2, element3];

function hover(element) {
  element.style.color = "blue";
  element.style.fontSize = "16px";
}

elements.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    hover(element);
  });
});
```

If all these elements are doing the same thing, you may consider consolidating the classes as well, using `.js-element` instead of `.js-element-1`, `.js-element-2`, `.js-element-3`:

```js
const elements = document.querySelectorAll(".js-element");

function hover(element) {
  element.style.color = "blue";
  element.style.fontSize = "16px";
}

elements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    hover(element);
  });
});
```

Digression: what's up with the `=>`? This is called an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). It's a shorthand way of writing a function:

```js
elements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    hover(element);
  });
});

// is the same as

elements.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    hover(element);
  });
});
```

_Any time you find yourself copy and pasting code, you should ask yourself if there is a more DRY way to do it._

## Fragments, Includes, Partials, Components

These are all words to describe the same idea: breaking up your HTML into smaller pieces and reusing them.

A website can be thought of as a collection of components that are reused across pages. For example, a header and footer are often reused across pages. We can break these out into separate files and reuse them.

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<main>
  <p>My website is about...</p>
</main>

<footer>
  <a href="mailto:me@gmail.com">Email me</a>
  <p>© 2021</p>
</footer>
```

Here, I would make two separate files for the header and footer, stored in a shared folder called `components`:

```html
<!-- components/header.html -->
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>
```

<br>

```html
<!-- components/footer.html -->
<footer>
  <a href="mailto:me@gmail.com">Email me</a>
  <p>© 2021</p>
</footer>
```

Then, I would insert them dynamically into my HTML, using JavaScript:

```html
<!-- index.html -->
<main class="page-content">
  <p>My website is about...</p>
</main>

<script src="js/fetch-elements.js">
```

<br>

```javascript
// fetch-elements.js
const pageContent = document.querySelector(".page-content");

fetch("./components/header.html")
  .then((response) => {
    return response.text()
  })
  .then((headerHtml) => {
    pageContent.insertAdjacentHTML("beforebegin", headerHtml);
  });

fetch("./components/footer.html")
  .then((response) => {
    return response.text()
  })
  .then((footerHtml) => {
    pageContent.insertAdjacentHTML("afterend", footerHtml);
  });
```
<figcaption>
  More info about `fetch` on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">MDN</a>.
</figcaption>

There are many benefits to doing this:

- You can reuse the same header and footer across multiple pages without copy and pasting
- You can update the header and footer in one place and it will update across all pages
- Your HTML is more readable and easier to maintain, and only contains the necessary content for that page

Static site generators like [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), or [11ty](https://www.11ty.dev/) can do more advanced versions of this, but it's all the same idea.

## CSS variables

CSS variables are a way to store values in CSS and reuse them. They are declared with `--` and accessed with `var()`. Often, they are used for colors, spacing, and fonts.

You also probably want to declare them in `:root` so they are accessible everywhere. I would also put them in a separate file, e.g. `variables.css`.

```css
/* variables.css */
:root {
  --blue: rgb(0, 123, 255);
  --red: rgb(255, 59, 48);
  --yellow: rgb(255, 204, 0);

  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
}
```

Then, you can use them anywhere in your CSS:

```css
/* styles.css */
.element {
  background-color: var(--blue);
  padding: var(--space-md);
}
```

This has a lot of the same benefits as the previous example of breaking up your HTML into components:

- You can reuse the same colors, spacing, fonts, etc. across multiple elements without copy and pasting
- You can update the variables in one place (your variables file) and it will update across all elements that use it

Having standardized spacing units also makes the site more cohesive as a whole.

## CSS nesting 🆕

CSS nesting is a new feature that allows you to nest selectors inside of each other. This feature came from [Sass](https://sass-lang.com/), a popular CSS extension.

```scss
.element {
  background-color: var(--blue);
  padding: var(--space-md);

  .child {
    color: var(--red);
  }
}
```

What does this target? Any element with the class `.child` that is a child of an element with the class `.element`. It is the equivalent of writing:

```css
.element {
  background-color: var(--blue);
  padding: var(--space-md);
}

.element .child {
  color: var(--red);
}
```

Why is this useful? It's a way to make your CSS more readable, because you are able to visually demonstrate hierarchy. It's also a way to encapsulate different states of an element within one place. For example, if you have a button that has a hover state, you can nest the hover state inside the button:

```scss
.button {
  background-color: var(--blue);
  padding: var(--space-md);

  &:hover {
    background-color: var(--red);
  }
}
```

You can see how this gets even more useful when you have more states, like `:focus`, `:active`, etc:

```scss
.button {
  background-color: var(--blue);
  padding: var(--space-md);

  &:hover {
    background-color: var(--red);
  }

  &:focus {
    background-color: var(--yellow);
  }

  &:active {
    background-color: var(--green);
  }
}
```

## File structure

The way we set up our site files for this project is good for beginners, but as you move onto more ambitious projects you will probably want to organize them in a different way, as to not repeat the same files over and over.

Here's an example of a file structure for a bigger project:

```
.
├── css
│   ├── components
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── ...
│   ├── pages
│   │   ├── index.css
│   │   ├── about.css
│   │   └── ...
│   └── shared
│       ├── variables.css
│       └── reset.css
├── js
│   ├── components
│   │   └── ...
│   ├── pages
│   │   └── ...
│   ├── shared
│   │   └── ...
│   └── vendor
│       └── ...
├── components
│   ├── header.html
│   ├── footer.html
│   └── ...
├── pages
│   └── ...
└── index.html
```

Here you can see that we have separated our CSS and JS into folders for components, pages, and shared. This is a way to organize your files so that you don't have to repeat yourself. For example, if you have a header that is used across multiple pages, you can put it in the components folder and reuse it. If you have a page-specific style, you can put it in the pages folder.

This is a way to avoid having CSS and JS files included in all of your page folders that more or less repeat the same styles and functions.

## Grids

I recommend having another look at the grids portion of the [flexbox and grid lecture](../flexbox-and-grid#grid). Grids are the backbone of most websites, and make it much easier to create responsive layouts.
