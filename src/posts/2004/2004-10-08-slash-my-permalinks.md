---
layout: post
title: Slash My Permalinks
date: 2004-10-08 20:10:34.000000000 +02:00
categories:
- papatech
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
<p>One of the puzzles I needed to solve when <a href="http://www.papascott.de/archives/2004/10/06/new-motor/">switching back to Movable Type</a> was how to keep my permalinks. Actually, most of the permalink was easy, thanks to <a href="http://diveintomark.org/archives/2003/08/15/slugs" title="Cruft-free URLs in Movable Type [dive into mark]">Mark Pilgrim's cruft-free URLs</a>. The problem was the slash at the end. </p>
<p>I've forgotten where, but somewhere I read that cool links end with a slash, since the URI is then a directory and it doesn't matter what filetype (if there is indeed a file at all) contains the page, the URI won't change. However, MT doesn't differentiate between the permalink and the filename that it saves. If you try to set MTEntryPermalink to a directory, MT tries to write to the directory instead of a file, which of course fails.</p>
<p>One approach is to set MTEntryPermalink to blah-blah/index.html, and write a one-line <a href="http://www.movabletype.org/docs/mtmanual_programmatic.html#plugins" title="add_global_filter(slashify=>sub{my $s=$_[0];$s=~s!index.[\w]*$!!g;$s;});">global filter plugin</a> to delete the filename from every instance of MTEntryPermalink in all templates. I tried it, but it's a pain to add an attribute to all those instances, and the trackback data was still wrong.</p>
<p>A better approach is <a href="http://www.dribin.org/dave/blog/archives/2003/09/24/permalink_urls/" title="Dave Dribin's blog: Fixing Movable Type's Permalink URLs">Dave Dribin's patch to MT.pm</a> so you can set MTEntryPermalink to a directory, and have MT save the template to a file index.html (or index.whatever). That's what I'm doing now, but of course the problem with a patch is that it's a patch, and you have to remember to re-apply it when MT 4.0 or 3.2 or 3.112384 is released. But maybe the same thing can be accomplished with the new plugin architecture in MT3. Stay tuned.</p>
