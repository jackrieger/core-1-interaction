---
title: Session 4
---

## Live coding questions

Like last week, submit one question you had from doing your entry:

[Questions 9/19](https://docs.google.com/document/d/1BJivK1QuUO_xyiY8zWS3rL_Xq1TAUfRjeshtzpBMN5k/edit?usp=sharing)

This week I'll go over each question in-class.

## How do I debug?

Let's go through the process of debugging an issue with your code.

- Validators
  - HTML
  - CSS
  - JavaScript (later)
- Beautifiers
  - HTML
  - CSS
  - VS Code (format on save)
- Stack Overflow
- ChatGPT

## Break

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

## Git config

We're going to pick up where we left off with getting a repository up on GitHub, though we will not be using the Terminal. This repository will be where your Harmonic Collection lives and is made available on the internet.

{% capture details %}

Using GitHub Desktop, do the following:

- sign in with your GitHub account
- select "Create a New Repository on your Hard Drive"
- use the following settings for your repository:
  - you can use a different file destination (for Local Path) but be sure it is somewhere you can easily access

{% include figure.html src='repo-settings.png' %}

- Click "Create Repository", and then "Open this repository in your external editor"
- Create an `index.html` file and create two folders (one called `css`, one called `images`) within your `harmonic-collection` folder:

```
css
  main.css
images
  .keep
index.html
```

- The `.keep` file is a placeholder file that tells git to commit an empty folder. Without it, git will think there is nothing to add for that folder.
- Delete the `.gitattributes` folder
- It should look like this now:

{% include figure.html src='repo-structure.png' %}

- Go back to GitHub Desktop and go to the input fields at the bottom left. We will now write a very short message describing the changes we just made to our code:

{% include figure.html src='commit-msg.png' %}

- Click "Commit to main"
- Now back on the homepage, click "Publish repository"
  - the default settings are fine, click "Publish" again on the next popup window
- Now our repository is up on GitHub! Go to your account on github.com and browse to make sure it is there

What did we just do?

First, we initialized a repository from GitHub Desktop. A repository is a storage space for code and related files. Then we added some starter files for our project. After adding these files, we made a commit. A commit in Git is a fundamental action that represents a snapshot of changes made to a repository's files and directories. It's a way of recording the modifications you've made to the codebase at a specific point in time. Finally, we pushed the commit up to GitHub. In Git, a "push" refers to the action of sending your local code changes to a remote repository.

There are two versions of your repository talking to one another, your local and your remote. The local repository is the version of the code stored on your computer, while the remote repository is the version stored elsewhere (GitHub, in our case).

{% endcapture %}

{% include details.html summary="How to create and upload your repo using GitHub Desktop" content=details %}

## For next class

Make a new entry in your Harmonic Collection. You will present these again next week.

Limitations can be very helpful in creative practice. For a challenge (optional), try making this week's entry without using any of the CSS properties you used last week.

Submit your `entry-3` as a link to your GitHub site.

In addition, come with three different sketches for the homepage of your collection. Use Figma to make the sketches. Try to make each sketch as different as possible.

## References
