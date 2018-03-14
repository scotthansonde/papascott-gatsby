---
layout: post
title: Performance Increase
date: 2005-11-25 08:59:02.000000000 +01:00
categories:
- papatech syndicated
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
<p>After <a href="http://www.papascott.de/archives/2005/11/23/blogstats-down-will-be-back/" title="PapaScott &raquo; Blog Archive &raquo; Blogstats down, will be back">tuning the database</a> at blogstats, it's nice to see this in <a href="http://jeremy.zawodny.com/mysql/mytop/">mytop</a>:</p>
<p><code>up 0+16:02:43<br />
Queries: 7.4M   qps:  136 Slow:     1.0</code>    </p>
<p>Exactly 1 slow query. Looks like we did something right. I can't really take the credit, though, it was my colleague P (whom I not sure I can name).</p>
