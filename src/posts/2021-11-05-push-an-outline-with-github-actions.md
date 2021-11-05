---
layout: post
date: 2021-11-05T10:00:23.775Z
title: Push an Outline with Github Actions
---

I've never worked with <a href="https://github.com/features/actions">Github Actions</a> before, but when thinking about how to push an outline from Drummer to GitHub I thought I'd take a look.

Actions are in <a href="https://yaml.org/">YAML</a> files saved in a special directory `.github/workflows`in your repository. They can run when something happens in the repository (like a push or a pull request) or can be triggered externally (with an <a href="https://docs.github.com/en/rest/reference/actions#create-a-workflow-dispatch-event">API call</a>). The action starts a virtual machine, runs commands, then shuts down.

Fetching an outline from Drummer and committing it to the repository was pretty easy...

```
name: fetch-opml
on: [workflow_dispatch]
jobs:
  fetch-opml:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - shell: bash
          run: |
            git config --global user.name "GitHub Action"
            git config --global user.email "papascott@gmail.com"
            curl http://drummer.scripting.com/ScottHansonDE/papascott-de.opml -o papascott-de.opml
            git add papascott-de.opml
            git commit -m "Fetched at `date`" --allow-empty
            git push origin main
```

NB: This post was written in Markdown, not Drummer, since I don't know yet how to render code blocks from OPML. _Still diggin'!_
