---
layout: post
title: Generic Links
date: 2002-11-19 22:11:05.000000000 +01:00
categories:
- blogging
tags: []
status: publish
type: post
published: true
meta: {}
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>As I <a href="/2002/11/18/1991.html">threatened</a> to do a couple of days ago, I've converted all the internal links to a generic /YYYY/MM/DD format. The individual posts have <a href="/2002/11/18/1991.html">.html</a> endings for easier reading, but since the file ending is ignored it doesn't affect anything. <a href="/2002/11/18/1991.swf">https://www.papascott.de/2002/11/18/1991.swf</a> will work as well, or even <a href="/2002/11/18/1991.doc">https://www.papascott.de/2002/11/18/1991.doc</a>.</p>
<p>b2 was fairly cooperative with all of this. In index.php, the individual link is now <code>&lt;a href="&lt;?php the_time('/Y/m/d/');the_id(); ?>.html"></code>. b2archives.php had to be adjusted to output the new monthly archive links. The *_popup_link functions output relative links that are now wrong in the archive pages. I had to adjust them to add a slash at the beginning of the href. Just for fun, I made the date headline into a link to a daily archive. That function is now really ugly: <code>&lt;?php the_date('/Y/m/d/">&lt;h2>d.m.y','&lt;a href="',"&lt;/h2>&lt;/a>");</code></p>
<p>The RewriteRules are the as <a href="/2002/11/18/1991.html">before</a>, except that each [R,L] has been replaced with an [L], i.e. the link is not redirected to the rewritten link. And of course, the old <a href="/index.php?p=1991&amp;more=1&amp;c=1">index.php?p=blah&amp;more=1&amp;c=1</a> links still work as well.</p>
