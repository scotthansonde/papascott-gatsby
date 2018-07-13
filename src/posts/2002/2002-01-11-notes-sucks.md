---
layout: post
title: Notes Sucks
date: 2002-01-11 21:01:06.000000000 +01:00
categories:
- General
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
<p>I've been considering weblog server software (much like <a href="http://www.nothingbutthetruth.de/stories.php?story=02/01/11/4320090">WorldWideKlein</a> as well today). I've considered <a href="http://www.sunlog.ch/">sunlog</a> (in German, but that would be no problem), but right now I've been playing with <a href="http://www.movabletype.org">Movable Type</a> over at http://www.papascott.de. So far I really like it. It might be a keeper!</p>
<p>Lotus Notes ruined my morning. Let's just say that there is some sort of undocumented limit to the length of all aliases for a view, and when that limit is exceeded and the alias is called via http, the server responds gracefully by crashing. Took me about 10 crashes to figure that out.</p>
<p>To add to the misery, I had a backup of the database restored to my home directory, which somehow changed the ownership of my home directory to that of the Notes database, which made it impossible for me to mount my home directory, which made it impossible for me to ssh to my servers. No, it was not a good morning at all.</p>
