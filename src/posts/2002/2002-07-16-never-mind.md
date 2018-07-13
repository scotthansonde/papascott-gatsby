---
layout: post
title: Never Mind!
date: 2002-07-16 00:07:14.000000000 +02:00
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
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p><b>Conclusion</b> As Emily Litella would say, "Never mind!" The problem, as I should have suspected, was on my side. My browser font settings were somewhat illogical (default size: 12 px, minimum size: 11px), so of course changing to relative sizes screwed things up. I'll leave my original post as is below as an ode to my confusion.</p>
<hr />I tried out Mark's tip for today on <a href="http://diveintomark.org/archives/2002/07/15.html#day_26_using_relative_font_sizes">using  relative font sizes</a>, but unfortunately it didn't work for me, at least not the part about the page looking "exactly the same" as before. For my browser of choice (Mozilla under both Linux and FreeBSD), the posting text was shrunk, but not the sidebar text. Setting a minimum font size fixed the font size, but the leading (line spacing) was still reduced, enough to make it less readable. I've left the settings on my <a href="/validate.php">validation page</a>, if you care to look. Maybe noone sees the difference except for me. It could very well be a Unix-only TrueType/XFree86 issue. I had run into similar issues before trying to set up font sizes with CSS, and this serves to remind me why I don't do stuff like design and layout anymore. It just makes your brain hurt.</p>
<p><b>Update</b> On Mama's Win98/IE5.5, Mark's CSS makes the leading a tick looser, but hardly noticable, while under Mozilla/Win it's microscopically tighter. Is my obsession with leading because I used to typeset a scientific journal for a living?</p>
