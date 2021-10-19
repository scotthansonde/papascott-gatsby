---
layout: post
title: "How to build 3000 pages in Jekyll in less than 4 seconds"
date: "2016-04-25 09:24:47 +0200"
---

Last year I converted my Wordpress blog to [Jekyll](http://jekyllrb.com/). My 16 years of blogging are now saved as text files which Jekyll renders into static HTML, which I then push to GitHub where the blog is now hosted. I [mentioned then](https://www.papascott.de/archives/2015/04/30/see-what-sticks/) that it took Jekyll some 3 minutes to render my 3000 or so blog posts, which is kind of a drag since the default is to rebuild the entire site every time even a small change is made.

Actually, the latest version of Jekyll improved build times considerably. It can now build my 3000 pages in about a minute. But when making changes, that's still too long to wait.

However, using a trick, I can now build those 3000 pages in 4 seconds. The trick seems pretty obvious to me, but I've not seen it written up anyplace, so hence this post.

The trick, of course, is to _not_ build all 3000 pages. For older posts use [jquery](https://jquery.com/) to load in parts of the layout that might change, but leave the HTML file alone. For me, those parts are the sidebar and the recent posts. I build HTML snippets for those divs and load them in like:

```
$( "#sidebar" ).load( "/includes/sidebar.html" );
```

Right now, on the Jekyll side I don't want it to rebuild posts from before 2015\. I've put all those in a \_posts/older subdirectory and added an exclude: directive in my \_config.yml:

```
exclude: [_posts/older]
```

On the HTML side, ever since I started blogging, even way-back-when with [EditThisPage](http://scripting.com/davenet/1999/12/08/editthispagecom.html), my posts have been sorted by date. I need to tell Jekyll not to erase the pages I've chosen not to rebuild (and it's too bad \_config.yml doesn't understand wild cards)

```
keep_files: [archives/1999, archives/200, archives/2010, archives/2011, archives/2012, archives/2013, archives/2014 ]
```

At least "archives/200" covers an entire decade in one entry. :-)

And that's it. When I do want to rebuild to entire site, I can comment out those two directives and let 'er rip. And being hosted at GitHub, you can see all my gory source files in the source branch at [https://github.com/papascott/papascott.github.io](https://github.com/papascott/papascott.github.io)
