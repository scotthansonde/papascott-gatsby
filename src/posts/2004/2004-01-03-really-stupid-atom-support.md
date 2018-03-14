---
layout: post
title: Really Stupid Atom Support
date: 2004-01-03 17:01:55.000000000 +01:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>(for <a href="http://magpierss.sourceforge.net/">Magpie RSS 0.52</a> and <a href="http://minutillo.com/steve/feedonfeeds/">Feed on Feeds 0.1.1</a>).  Many blogs are already sporting Atom 0.3 feeds, and <a href="http://www.diveintomark.org/">some</a> have even declared their RSS to be deprecated. So I decided to try to bolt Atom support onto my aggregator of choice. It turned out to be pretty easy, requiring patching just 2 files. </p>
<p>However, my approach is very simplistic, simply representing Atom items in Magpie such that FoF can understand and display them. I'm sure that Kellan and Steve will eventually fully support Atom feeds. But until they do, here is the <a href="http://www.papascott.de/wordpress/wp-content/uploads/2004/01/rsas.patch.gz">patch to init.php and parse_rss.inc</a>. I thought about calling it 'Really Stupid Support for Atom', but the acronym 'RSS for Atom' would have confusing to say the least.</p>
<p>Disclaimer: this works for me, at least for the <a href="http://www.papascott.de/atom.xml">three</a> <a href="http://diveintomark.org/xml/atom.xml">Atom</a> <a href="http://www.ahawkins.org/atom.xml">feeds</a> I've tried. It may not work for you.<br />
<!--more--><br />
If you're interested in the gory details, I basically made 3 changes:</p>
<ol>
<li>Magpie will parse anything that remotely resembles RSS without bothering to validate it. While RSS is a 'channel' containing several 'items', Atom is a 'feed' containing several 'entries'. So I just told magpie to treat a 'feed' as a channel and an 'entry' as an item.</li>
<li>Magpie doesn't parse XML attributes at all. However, 'links' in Atom are defined purely as attributes, and each 'feed' or 'entry' can have several links, while in RSS a 'link' is simply a string. So I had Magpie create an array of items for each link.</li>
<li>I then told FoF about the new elements in the array, for example to use the 'tagline' for the 'description' if it exists. I also wrote a function for FoF to select the first appropriate link if the link is an array instead of a string.</li>
</ol>
