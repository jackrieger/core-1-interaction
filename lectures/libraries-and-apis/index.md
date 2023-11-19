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

Flickity is a touch-friendly, responsive carousel library. It's designed to create sliders that work well on many devices and browsers, with easy-to-use features for scrolling through items:

{%
  include figure.html
  src='flickity-example.png'
  alt='An example of Flickity.'
  caption='You’ve used a ton of these throughout your digital lives.'
%}

The official starter example on [Codepen](https://codepen.io/desandro/pen/azqbop). Note that here they’re including the library from a CDN (more details on that in the [next section below](#how-to-import-a-library-into-your-project)):

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="azqbop" data-user="desandro" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/desandro/pen/azqbop">
  Flickity</a> by Dave DeSandro (<a href="https://codepen.io/desandro">@desandro</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> Where's the JavaScript? They've made Flickity so that at its very base, all you need to do is include the data attribute `data-flickity` on your carousel element, and it will work right out of the box. However, you can further use JavaScript to customize the behavior in many different ways.

Nowadays there are plain JavaScript ways to make carousels, but at one point libraries were useful because browsers were way more inconsistent. Now, it’s more about saving time and not reinventing the wheel.

### p5.js

[p5js.org](https://p5js.org/)

p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.

Using the metaphor of a sketch, p5.js has a full set of drawing functionality. However, you’re not limited to your drawing canvas. You can think of your whole browser page as your sketch, including HTML5 objects for text, input, video, webcam, and sound.

{%
  include figure.html
  src='p5-showcase.png'
  alt='An example of p5.js.'
  caption='Check out lots of work from their showcase: [p5.js showcase](https://showcase.p5js.org/#/).'
%}

There is also a YouTube series called the Coding Train, that I highly recommend for exploring p5 (and creative coding in general):

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/biN3v3ef-Y0?si=YoIRWxrvl-J3vEOC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### D3.js

[d3js.org](https://d3js.org/)

D3 (or D3.js) is a free, open-source JavaScript library for visualizing data. Its low-level approach built on web standards offers unparalleled flexibility in authoring dynamic, data-driven graphics. For more than a decade D3 has powered groundbreaking and award-winning visualizations, become a foundational building block of higher-level chart libraries, and fostered a vibrant community of data practitioners around the world.

{%
  include figure.html
  src='d3-index.png'
  alt='An example of D3.js.'
  caption='Examples from [the gallery on D3’s site](https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable)'
%}

{%
  include figure.html
  src='d3-electricity.png'
  alt='An example of D3.js showing an electricity data visualization.'
  caption='[Electricity Usage, 2019](https://observablehq.com/@mbostock/electric-usage-2019)'
%}

D3 was developed by Mike Bostock, who was at the time a graphics editor at the New York Times. He has written a lot about D3 and data visualization in general, and I recommend checking out his blog if you're into that kind of thing: [bost.ocks.org](https://bost.ocks.org/mike/).

### Three.js

[threejs.org](https://threejs.org/)

Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage.

Three.js is often confused with WebGL since more often than not, but not always, three.js uses WebGL to draw 3D. WebGL is a very low-level system that only draws points, lines, and triangles. To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.

{%
  include figure.html
  src='threejs-cubes.png'
  alt='An example of Three.js.'
  caption='A bunch of cubes floating in your browser. See more examples on [threejs.org/examples](https://threejs.org/examples/).'
%}

{%
  include figure.html
  src='threejs-rainbow.png'
  alt='An example of Three.js.'
  caption='[This one](https://threejs.org/examples/#webgl_lines_fat_raycasting) is nice.'
%}

{%
  include figure.html
  src='threejs-figure.png'
  alt='An example of Three.js.'
  caption='An adjustable figure, with walking, running, idle animation. [Mess around with it](https://threejs.org/examples/#webgl_animation_skinning_additive_blending)'
%}

3D coding is a world unto itself, and the learning curve can be steep. However, people who get into it really enjoy it and can make some amazing things. If you're interested in learning more, I recommend checking out [The Book of Shaders](https://thebookofshaders.com/), which is a great resource for learning about it from the ground up.

## How to import a library into your project

Every library will have its own instructions for how to use it. But in general, you'll need to do three things:

1. Download the library, or get a link to a CDN
2. Link to the library in your HTML file
3. Write code that uses the library

Let's go through each step, using p5.js as an example.

### Download the library, or get a link to a CDN

You can download the library from the library's website. You'll get a zip file that you can unzip and put in your project folder. For our p5 example, you can download it from [p5js.org/download](https://p5js.org/download/).

Alternatively, you can link to the library from a CDN (Content Delivery Network). A CDN is a collection of servers distributed across the globe that store copies of files. When you link to a file on a CDN, the file is downloaded from the server closest to you. This makes your website load faster and saves bandwidth on your server. So, when using a CDN you don't need to download the file. But there can be occasional outages with a CDN, so that's something to consider.

To look for libraries hosted on a CDN, you can search for the library name on [cdnjs.com](https://cdnjs.com). For example, if you search for "p5js", you'll find a link to [cdnjs.com/libraries/p5.js](https://cdnjs.com/libraries/p5.js).

### Link to the library in your HTML file

You'll need to link to the library in your HTML file. You can do this by adding a `<script>` tag to the `<head>` of your HTML file, or at the end of the `<body>` before it closes.

> Recommended practice: If a script is essential for the layout or functionality of the page (like a CSS framework or a foundational JavaScript library), it might be necessary to load it in the `<head>`. Scripts that enhance or manipulate page content, such as interactive features or animations, are often best placed near the end of the `<body>`.

```html
<head>
  <!-- other stuff -->
  <script src="vendor/p5.min.js"></script>
</head>
<body>
  <!-- all your page content -->
  <script src="js/main.js"></script> <!-- this is the code that you write -->
</body>
```

– or –

```html
<body>
  <!-- all your page content -->
  <script src="vendor/p5.min.js"></script>
  <script src="js/main.js"></script> <!-- this is the code that you write -->
```

> Convention: the `vendor` folder in coding projects is a directory where third-party libraries, dependencies, and packages are stored. It's not a requirement to name the folder this, but it's a common practice.

> Also: when you see a file that has `.min` in it, that means that it's a minified version of the file. Minification is the process of removing all unnecessary characters from the source code without changing its functionality. This reduces the size of the file, which makes it faster to download and run.

### If you're using a CDN, it looks like this

```html
<head>
  <!-- other stuff -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.min.js" integrity="sha512-pgK6Wo8doipc/IPQ0ilH3b47ww01345nR9ud1/6Qp0n+lQlEW9zuw6JhysRcUpBY4yKuVZjn1MAkDxbnncuGsQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

`cdnjs.com` has a helpful "script copy" tag that creates this for you:

{%
  include figure.html
  src='cdn-link.png'
  alt='A picture of a script copy button on a CDN website.'
  caption=''
%}

## Write code that uses the library

The fun AND challenging part – learning to use the library. This is where you'll need to read the documentation and figure out how to use the library.

So for p5, I would first check out some of their basic examples, and then pull up their documentation to see what's possible:

[https://p5js.org/examples/](https://p5js.org/examples/) \
[https://p5js.org/reference/](https://p5js.org/reference/)

Some libraries even have nice tutorials for beginners:

[https://p5js.org/learn/](https://p5js.org/learn/)

_Much of a developer's life is reading through documentation and figuring out how to use things._

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
