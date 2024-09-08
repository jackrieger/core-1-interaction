---
layout: lecture
permalink: :slug
published: true
title: Code Logistics
toc:
  - codespaces
  - making-changes
  - live-site
---

## Codespaces

[GitHub Codespaces](https://github.com/features/codespaces) is a tool that lets you write and test code directly from your browser, without needing to install anything on your computer. It's like having a computer in the cloud where your code lives, and you can work on it from anywhere. Codespaces is great for starting projects quickly or collaborating with others.

## Making Changes

In our case, there are two layers of making and saving changes. Any changes you make will be autosaved by Codespaces. However, when you actually want these changes to make it to your live site, you need to _commit_ them. You can think of commits like checkpoints in your code. One example might be, you make the menu navigation for your site, and then turn that into a commit. How much changes you put in a commit is up to you. You must 

Then for these commits to go to the live site, you can use the "Sync Changes" button in the commit sidebar menu item of Codespaces:



## Live Site

A website is a folder that lives on the internet.

When you preview changes from your own computer in Codespaces, you will see an auto-generated url like so:

`https://humble-space-engine-p7xp5xxjjjgcrv7p-4000.app.github.dev/harmonic-collection/entry-1`

Only after you sync your commits will your actual live website show the changes that you made. After you do that, you will see the real page, on your live site, on the internet:

`https://YOUR-GITHUB-USERNAME.io/harmonic-collection/entry-1`

> Here, `YOUR-GITHUB-USERNAME` will be the username you made on GitHub, like abc789: `https://abc789.github.io/harmonic-collection/entry-1`
