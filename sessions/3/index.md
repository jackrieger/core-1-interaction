---
title: Session 3
---

## Presentations

## Break (~10 min)

## Intro to CSS

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

