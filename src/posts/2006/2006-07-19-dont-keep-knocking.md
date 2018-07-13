---
layout: post
title: Don't Keep Knocking
date: 2006-07-19 06:44:22.000000000 +02:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401631475'
  _social_notify: '1'
  _wpcom_is_markdown: '1'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>At <a href="http://blogg.de/">blogg.de</a> we used to run a ping service using XML-RPC (similar to weblogs.com) for German (language or related) weblogs. We <a href="http://blogworkorange.de/eintrag.php?id=87">discontinued the service</a> back in November. The data coming in was at least 99.9% garbage, either spam or from logs having nothing to do with German weblogs. The start page for blogg.de now lists entries only from blogg.de weblogs instead of the entire German blogosphere.</p>
<p>Now, 8 months later, we still receive over 60000 pings per hour, every hour. I recently set up <a href="http://www.modsecurity.org/">mod&#95;security</a> to filter out the ping requests (with HTTP status "410 Gone") while letting through the (very, very) few legitimate requests from registered blogg.de users. The load on our web servers decreased by 30%.</p>
<p>The number of pings coming in hasn't decreased at all. After 10 days we're still at over 60000 per hour.</p>
