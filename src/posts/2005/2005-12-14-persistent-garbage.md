---
layout: post
title: Persistent Garbage
date: 2005-12-14 06:41:38.000000000 +01:00
categories:
- papatech syndicated
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401632732'
  _social_notify: '1'
  _wpcom_is_markdown: '1'
  thesis_thumb_width: '66'
  thesis_thumb_height: '66'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>Two weeks ago at blogg.de we <a href="http://blogworkorange.de/eintrag.php?id=87#kommentare" title="Kein XML-RPC mehr bei blogg.de [blogworkorange]">stopped accepting xml-rpc pings</a> because, quite frankly, the data coming in was 99% garbage, either non-German blogs or out-and-out spam. Today we are still receiving between 300 and 500 requests per minute on the xmlprc domain. Since the change the outgoing bandwidth peaks according to <a href="http://www.cacti.net/" title="Cacti: The Complete RRDTool-based Graphing Solution">cacti</a> are 2 MBit/s less than before. That's a lot of garbage.</p>
