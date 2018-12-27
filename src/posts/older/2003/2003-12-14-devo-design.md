---
layout: post
title: Devo Design
date: 2003-12-14 20:12:55.000000000 +01:00
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
<p>If you're observant, you'll have noticed that the design of this site has been simplified (as if it weren't simple before), inspired by recent changes at <a title="Scripting News: 12/11/2003" href="http://archive.scripting.com/2003/12/11#readersAggregatorsLinkblogsAndAnotherApproach">Scripting News</a> and <a title="The Scobleizer Weblog" href="http://scoble.weblogs.com/">Scobleizer</a>. I've integrated the Quick Links into the main blog and simplified the permalinks (junking the 'Posted by Blah Blah Blah' bit). The Quick Links now have permalinks of their own and take comments.<br />
<!--more--><br />
What looks simple actually took a bit of effort to pull off, since Movable Type isn't able to easily cusomize layouts based on category. The ~450 Quick Link entries needed to be assigned a category and moved to the main blog, which was easiest to do directly with MySQL. I wanted to not print titles for the Quick Links, which required the Extended Comments plugin from <a title="Brad Choate: Welcome" href="http://www.bradchoate.com/">Brad Choate</a>. For the remaining entries, I wanted to put the title within the paragraph tags for the entry body. This required a custom convert line break setting (break lines with br, but don't insert p tags), using the Format Breaks plugin from <a title="Brad Choate: Welcome" href="http://www.bradchoate.com/">Brad Choate</a>. Then I wanted to trwiddle the formatting for entries that either begin or end with an image, which required the Regex plugin from (you guessed it) <a title="Brad Choate: Welcome" href="http://www.bradchoate.com/">Brad Choate</a>. It would have been a lot easier if he packaged all his plugins together :-).</p>
