---
layout: post
title: Auto Blogroll with Google Reader
date: 2008-12-09 04:00:37.000000000 +01:00
categories:
- blogging
tags: []
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '3'
  _social_aggregation_next_run: '1401623215'
  _social_notify: '1'
  _wpcom_is_markdown: '1'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>The other day I overheard <a href="http://twitter.com/NewWrldYankee">@AmiExpat</a> and <a href="http://twitter.com/NewWrldYankee">@NewWrldYankee</a> twittering about how annoying it is deal with link requests and keep a blogroll. My solution to that used to be to keep an automatic list of blogs I actually read.</p>
<p>At the time I had a <a href="/archives/2004/12/07/blogroll-timestamps-with-perl-and-bloglines/">bunch of scripts to do the dirty work</a> (don't bother looking for them, they seem to be gone from SourceForge) that would pull my readling list from Bloglines and output a list for my sidebar.</p>
<p>That was 2004, this is now, and with Google Reader and WordPress you don't have to do any of the dirty work yourself. It's pretty easy these days to list a subset of the blogs you read (keeping your sexblogs secret, of course) on practically any weblog.  On WordPress there is even a widget that makes it easier.</p>
<ol>
<li>In Google Reader you can choose to <a href="http://googlereader.blogspot.com/2007/11/attack-of-20ers.html">make one or more of your tags public</a>. Go to your settings page, then under "Folders and Tags" you can choose to "change sharing" for the tags you choose. You then get links for a number of ways to share the articles or blogs that have this tag. Under "add a blogroll to your site" you can get some javascript to copy and paste into your blog template to get a blogroll.</li>
<li>
<p>For those of us who use WordPress, copying and pasting is too much work.  There is a <a href="http://wordpress.org/extend/plugins/google-reader-blogroll-widget/">Google Reader Blogroll Widget</a> that does the dirty work for us. Once you've made the folder public in Google Reader, just activate the the widget, copy in one of the links, and you're good to go. This in effect sets up the same javascript you could copy in by hand.</p>
</li>
</ol>
<p>I generally don't like putting in external scripts on my site, otherwise your site ends up to be a <a href="http://lumma.de">widget hell</a> that takes ages to load and hangs if any of them happen to break. I've had good experience with scripts from Google, though, and face it... if Google is broken, the entire internet is probably broken as well.</p>
<p>So now I've made my "expat" tag public, and anytime I give the tag to a new blog, it gets added to the list. And if for any reason I stop reading a blog, it disappears from the list as well. The one thing it doesn't do automatically is remove dead and outdated links... the deadwood has to be cleaned out by hand.</p>
<p>If you're interested in more of the stuff I read, I've also set up a <a href="/reading-list/">mega-list of seveal of my tags</a> as a separate page</p>
