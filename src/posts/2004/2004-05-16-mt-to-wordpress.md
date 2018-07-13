---
layout: post
title: MT to WordPress
date: 2004-05-16 21:05:41.000000000 +02:00
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
<p>Some notes on importing MT entries into WordPress: </p>
<ol>
<li>The script in the WP RC uses the MT export file, so post numbers are not imported. That might be important if you use the post number in your permalink, like I do.</li>
<li>MT 3.0 seems to have a bug in the export routine... the dates are missing an AM/PM designation, so all posts and comments posted between noon and midnight are off by 12 hours. MT 2.661 exports from an MT 3.0 database just fine, though.</li>
<li>The default encoding of WP is UTF-8, so you either have to convert the MT export file from Latin 1 to UTF-8 (either recode or BBEdit works fine), or change the encoding in WP (under Options->Reading) to ISO 8859-1.</li>
</ol>
