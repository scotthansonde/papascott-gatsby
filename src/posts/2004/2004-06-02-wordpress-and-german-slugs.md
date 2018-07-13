---
layout: post
title: WordPress and German Slugs
date: 2004-06-02 22:06:41.000000000 +02:00
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
<p>I wanted to use sanitized titles as legible permalinks when I converted to WordPress, so I was somewhat dismayed on my first trial run when all the umlauts (ä,ö,ü) were thrown out. That is, a post entitled "Schröder Sucks" was encoded as schrder-sucks, which isn't legible at all. I went browsing through the <a href="http://cvs.sourceforge.net/viewcvs.py/cafelog/wordpress/">WordPress CVS repository</a>, and found that code for converting (rather than dropping) high-ASCII characters had been <a href="http://cvs.sourceforge.net/viewcvs.py/cafelog/wordpress/wp-includes/functions-formatting.php?r1=text&tr1=1.29&r2=text&tr2=1.31&diff_format=h">added</a> after 1.2 was released. I copied the code into a plugin, and ended up with schroder-sucks, which is almost correct.</p>
<p>In German, the convention is to transliterate umlauts into two letters (ä=ae, ö=oe, ü=ue). The CVS code has some two-character conversions, so I added the umlauts to that list in my plugin, and the result was schroeder-sucks, which is just what I wanted.  I've saved the <a href="http://wiki.wordpress.org/GermanPermalinks">German Permalinks plugin</a> at the WordPress Wiki. Note that to import correctly, the plugin needs to be installed and activated <em>before</em> the import.</p>
