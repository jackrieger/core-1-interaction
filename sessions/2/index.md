---
title: Session 2
---

## Name diagram

Fill in your name on this seating chart, so we can continute to learn each other's names: [https://docs.google.com/spreadsheets/d/1Hv98rNiB_ylOfD8Rx4-mTJt4r6qmWSFl1jRA2C1h1G8/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1Hv98rNiB_ylOfD8Rx4-mTJt4r6qmWSFl1jRA2C1h1G8/edit?usp=sharing).

## Group discussion

Get into groups of four, with a group that is different from the one you had last week. Discuss the following from the reading:

- An important insight
- Something you have a question about

After 10 minutes, we will discuss the questions you have about the reading as a group.

## Lecture: Intro to HTML

We will now go over the [fundamentals of HTML]({{ site.baseurl }}/lectures/intro-to-html).

## Break (~10 min)

## Presentations

Let's present our ideas for the theme of our harmonic collection, and show off the one project that you’re proud of / represents yourself as a designer. Each person will have 5 minutes.

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

- Based on the feedback you received in class, move forward with one direction. Using HTML only, create the first entry that responds to your collection. Explore the concept through typographic or interface supporting HTML elements (no images, videos, or sounds for this entry). Think through the hierarchy of your entry:
  - What is the most important piece of information?
  - How will you define that — with spacing, alignment, scale?
  - Is everything of equal hierarchy?
  - Be prepared to explain how hierarchy impacted your design decisions.

- Submit the `index.html` file on Canvas, and push it to your remote repository on GitHub.

- Reading: [Making Space in Online Archives](http://distributedweb.care/posts/online-achives/) – Mindy Seu (read up until the Q&A, read more if you want)

## References
