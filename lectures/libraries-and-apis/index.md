---
title: Libraries and APIs
---

## Libraries

You've written your own functions and used built-in functions by using Web APIs (things like `addEventListener`, `querySelector`, … we'll talk about APIs in a bit).

Now imagine that you want to use functionality that someone else wrote. You could copy and paste their code into your own file, but that's not very efficient. Instead, you can use a library.

A library is a collection of code that someone else wrote that you can use in your own code. Libraries are usually written by other developers and are made available for free. They can be used to add functionality to your website, like adding a carousel or a map, or to make your code easier to write, like using a library to make an HTTP request.

## Libraries for designers & artists

For our context, there are four libraries that I want to highlight:

### Flickity

[flickity.metafizzy.co](https://flickity.metafizzy.co/)

Flickity is a touch-friendly, responsive carousel library. It's designed to create sliders that work well on desktop, tablets, and mobiles with easy-to-use features for scrolling through items:

{%
  include figure.html
  src='flickity-example.png'
  alt='An example of Flickity.'
  caption='You’ve used a ton of these throughout your digital lives.'
%}

The official starter example on [Codepen](https://codepen.io/desandro/pen/azqbop). Note that here they’re including the library from a CDN (more details on that in the [next section below](#how-to-import-a-library-into-your-project):

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="azqbop" data-user="desandro" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/desandro/pen/azqbop">
  Flickity</a> by Dave DeSandro (<a href="https://codepen.io/desandro">@desandro</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### p5.js

[p5js.org](https://p5js.org/)

TK

<!--
p5.js is a library that brings the power and simplicity of Processing (a programming language and environment for artists) to JavaScript, making creative coding accessible to a broader audience. It is excellent for creating graphic and interactive experiences, based on the core principles of Processing.

Verbal Example:
Let's say you want to create an educational web application that helps teach the concept of gravity. Using p5.js, you could create an interactive simulation where users can drop balls of different masses and see how they fall and bounce, visually learning about gravitational force and its effects on different objects.
-->

### Three.js

[threejs.org](https://threejs.org/)

TK

<!--
Three.js is a 3D library that simplifies the process of creating 3D graphics on the web using WebGL. It abstracts away the complexity of WebGL, giving developers the ability to create impressive 3D scenes, animations, and effects with a more manageable set of APIs.

Verbal Example:
Imagine you're developing a website for a new housing development and you want to provide a virtual tour of the houses. With Three.js, you could build an interactive 3D model of a house that users can "walk through" by clicking and dragging their mouse to look around, experiencing the space as if they were there in person.
-->

### D3.js

[d3js.org](https://d3js.org/)

TK

<!--
D3.js is a powerful library for creating complex and dynamic data visualizations in the web browser. It uses HTML, SVG, and CSS, and gives you the tools to bind data to the DOM and apply transformations to the document based on that data.

Verbal Example:
Consider a financial website that wants to display stock prices in real-time. Using D3.js, you could create a line chart that updates every few seconds, reflecting the latest prices. As new data arrives, the chart could transition smoothly, moving the existing line to the left and appending the new data to the right.
-->

## How to import a library into your project

Every library will have its own instructions for how to use it. But in general, you'll need to do three things:

1. Download the library, or link to it from a CDN
2. Link to the library in your HTML file
3. Write code that uses the library

### Download the library, or link to it from a CDN

You can download the library from the library's website. For example, you can download Flickity from [flickity.metafizzy.co/](https://flickity.metafizzy.co/). You'll get a zip file that you can unzip and put in your project folder.

Alternatively, you can link to the library from a CDN (Content Delivery Network). A CDN is a collection of servers distributed across the globe that store copies of files. When you link to a file on a CDN, the file is downloaded from the server closest to you. This makes your website load faster and saves bandwidth on your server.

### Link to the library in your HTML file

You'll need to link to the library in your HTML file. You can do this by adding a `<script>` tag to the `<head>` of your HTML file. The `<script>` tag should have a `src` attribute that points to the library file. For example, if you downloaded Flickity and put it in a folder called `flickity` in your project folder, you would add this to your HTML file:

EXAMPLE TK

## Each of the libraries instruction pages

Flickity:
...


## API

APIs, or Application Programming Interfaces, are a large part of web development. They allow different software applications or websites to communicate with each other. It's like a messenger that takes your request, tells a system what you want to do, and then returns the system's response back to you.

In a web context, APIs enable interaction between client-side and server-side components, as well as with external services. For example, when you use a social media site, your browser (the client) sends a request to the site’s server using its API. The server processes the request, and then the API sends the data back to your browser. This data is then presented to you in a readable format.

{%
  include figure.html
  src='rest-api.png'
  alt='A diagram of a REST API.'
  caption='REST (Representational State Transfer) is a common software architecture on the web. In REST, a client (a computer or phone) sends a request to a server to perform an action: GET (to retrieve data), POST (to create data), PUT (to update data), or DELETE (to remove data). The server, which holds resources (like HTML files, images, and videos), processes the request and sends back a response in a format that the client can understand, usually in XML or JSON format.'
%}

JSON (JavaScript Object Notation) is a common format for data sent over APIs. It is a lightweight format that is easy for humans to read and write and for machines to parse and generate. It will look familiar to you, because you've used JavaScript objects before:

{%
  include figure.html
  src='json.png'
  alt='An example JSON object.'
  caption='Example data from [dummyjson.com](https://dummyjson.com/). The top would be the code that you write while the bottom is the data sent back from the server.'
%}

## Types of Web APIs

### Internal APIs

These are used within the organization that created them, primarily to improve products and services from within. They allow different teams or parts of a software system to communicate with each other.

Example: A large retail company might have an internal API for its inventory management system. This API allows various internal applications, like the point-of-sale system and the online shopping portal, to check inventory levels, update stock, and manage orders without directly accessing the database.

### External APIs

An External API is made publicly available for developers outside of the organization that created it. It allows third-party developers (you) to create apps that can communicate with the provider's service.

Example: The Twitter API (R.I.P. 🪦) was an external API that allowed developers to access Twitter's functions. Developers used this API to integrate Twitter features into their apps, such as tweeting automatically, accessing tweet streams, or analyzing Twitter data.

### Web Service API

Web Service APIs are designed to be accessed over the web using the HTTP protocol and are commonly used to enable different applications to communicate with each other over the internet.

Example: The Google Maps API is a web service API that allows developers to embed Google Maps on webpages using HTTP requests. This API provides various functionalities like showing a map with markers, providing directions, and displaying traffic conditions.

{%
  include figure.html
  src='google-maps-api.png'
  alt='An example of the Google Maps API.'
%}

{%
  include figure.html
  src='google-maps-api-html.png'
  alt='An example of the Google Maps API.'
%}

{%
  include figure.html
  src='google-maps-api-js.png'
  alt='An example of the Google Maps API.'
  caption='Check out this example on [Google’s website](https://developers.google.com/maps/documentation/javascript/examples/map-simple#maps_map_simple-javascript) and [JSFiddle](https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/map-simple/jsfiddle).'
%}
