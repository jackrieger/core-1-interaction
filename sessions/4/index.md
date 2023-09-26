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

### Online Search

Try breaking your problem into smaller steps and see if you can search for a more narrow problem. Example: instead of “Site doesn’t look right” try “CSS isn’t showing up” or “CSS isn’t loading”.

### Sharing Work with me or your classmates

Have a few pointed and direct questions about your project ready, and share the most recent version of your work with me.

### Options for Sharing Code

1. If your work is online on GitHub, send me the URL (later in the semester)
1. Create a zip file of the project folder (the folder, index.html and assets folder should all be included).
1. Glitch is a tool for previewing code in real time. Please create an account. You can share your work by creating a new file and saving the html in the index.html and your CSS in the “style.css” (you’ll need to adjust the path in the index.html)

ChatGPT
- Asking to clarify why code you wrote isn’t working
- Asking to help debug a certain part of your code and receive explanations
- Credit ChatGPT when using it in the source code (with a comment)
- DO NOT use it to complete your project, generate ideas, or give you full on code snippets verbatim


## Break

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
