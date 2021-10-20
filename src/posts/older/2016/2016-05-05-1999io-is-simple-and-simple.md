---
layout: post
title: '1999.io is simple.  And simple.'
date: 2016-05-05 10:43:01 +02:00
---

The past few weeks I've been trying out [1999.io](http://scripting.com/2016/05/04/1238.html), the new blogging software by Dave Winer. You can either try it out at his site [my.1999.io](http://my.1999.io) (you just need a Twitter ID to log in) or you can [install the server](https://github.com/scripting/1999-project/blob/master/docs/setup.md) on any system that can run Node. Being a server guy I of course installed my own (on a cheap 3.50€‚/mo VPS), and used it to write my last few blog posts.

I like it because because it's simple. And simple. Simple to write with, simple to work with.

It's simple to write with. You just open the editor page and type. To update your text, you just click on it and type. There are some simple formatting options, but nothing that gets in the way. When you update, though WebSocket magic anyone reading your post immediately gets the update.

And on the server it's [simple to work with](http://my.1999.io/users/1999io/2016/04/11/0004.html). There's no database, just files in open formats readable as text, JSON, OPML, RSS, HTML. Formats you can use for other purposes if you are so inclined. Even the HTML files for each post contain the JSON for the post, which I first thought was redundant but now see is brilliant. It's like the web page contains it's own DNA and can re-create itself.

These open formats allow one to do things with the output that go beyond the server. For instance, I copy the output of my server to an S3 bucket at [1999.papascott.de](http://1999.papascott.de), which can probably handle load better than my cheap VPS :smile:. It's not yet coupled to my main blog on Jekyll (right now I'm using copy and paste), but I imagine it wouldn't too much cleverness to achieve that.

I hope someday to be able to use 1999.io as a blogging central, with the ability to send my posts to my blog, or Twitter, or Facebook, or Medium, or wherever, but keeping my original posts for myself. I'll let those big silos show my work, but not own it.
