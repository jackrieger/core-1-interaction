---
---

Next semester
- chris handwritten tags exercise (earlier in semester)
- https://veryinteractive.net/pages/coding-from-life.html

---

JS
- carousel
- bouncing ball js
- P5 coding train

Better practices
- Use CSS grid
- Use CSS variables
  - mixins
  - space variables
  - colors
- Componentization/templating
  - Sharing CSS files
  - Include header/footer with AJAX
  ```javascript
  fetch("./header.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });

  fetch("./footer.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
  ```

---

Whole sections

## Activity: Website Examination

Submit the websites you brought in for discussion on this sheet:

[Websites We Like](https://docs.google.com/document/d/1ANSYt4Rh72_bWS6zQ1A9XkuwbnqVO46UQ9AHDmksIyY/edit?usp=sharing)

We're going to examine a few of these as a class, and then you will get into small groups to examine the rest.

Here are a few framing questions to get you started:

- What are some visual design patterns you see?
- How is interactivity playing a role in the experience?
- What is the navigation and structure of the site?
- What does the site want you to do?
- Imagine the site is a physical space. How does it feel? Homelike? Barren? Are you excited to be here?

On the more technical side, you can find elements you like on the site and inspect them using the web inspector:

{% include figure.html src="inspector.png" %}

{% capture details %}

## Inspecting a Page in Google Chrome Dev Inspector

### Access DevTools

There are several ways to access DevTools:

- **Menu Bar:**
  Click the three vertical dots (menu icon) in the top-right corner of the Chrome window. From the dropdown menu, go to "More tools" and select "Developer tools."

- **Right-click Context Menu:**
  Right-click anywhere on the web page and select "Inspect" from the context menu.

- **Keyboard Shortcut:**
  - Windows/Linux: Press `Ctrl + Shift + I` (or `F12`).
  - Mac: Press `Cmd + Option + I`.

{% include figure.html src="inspector-ellipsis-menu.png" %}

### Elements Panel

In the DevTools panel, you'll see a series of tabs. Click on the "Elements" tab. This is where you'll inspect and manipulate the web page's HTML and CSS.

{% include figure.html src="inspector-elements-tab.png" %}

### Inspect an Element

You can now use the inspector tool to select and inspect elements on the web page:

- **Hover over Elements:** Move your mouse cursor over elements on the page, and you'll see them highlight in the Elements panel. Clicking on an element will select it in the panel, allowing you to see and modify its HTML and CSS.

{% include figure.html src="inspector-cursor.png" %}

- **Use Select Element tool:** Click the icon in the top-left corner of the Elements panel (it looks like a cursor). Then, click on an element in the page to select it.

### View and Edit HTML/CSS

With an element selected in the Elements panel, you can:

- **View HTML:** The left pane shows the HTML structure of the selected element and its children. You can expand and collapse sections to explore the structure.

- **View CSS:** The right pane displays the CSS styles applied to the selected element. You can edit these styles directly to see live changes on the web page.

{% include figure.html src="inspector-layout.png" %}

{% endcapture %}

{% include details.html summary="How to inspect webpages in Google Chrome" content=details %}
