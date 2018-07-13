---
layout: post
title: What Have You Done For Me Lately?
date: 2002-06-12 05:06:33.000000000 +02:00
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
<p>I just rearranged my <a href="http://www.papascott.de/referers.php">referers page</a> to sort chronologically, which seems to make more sense for a site with little traffic like this one.  I'm still using <a href="http://ranchero.com/php/rollingreferers/">Brent's code</a>, but added a MAX(d) column to the SQL query, and sort on it: </p>
<p><code>SELECT DISTINCT url, COUNT(*) as ct, MAX(d) as maxd from referers GROUP BY url ORDER BY maxd DESC, url;</code></p>
<p>I could do some more intelligent things with the URLs (like sort out duplicates and highlight the really <a href="http://searchrequests.weblogs.com/">disturbing</a> Google queries), but maybe another day.</p>
