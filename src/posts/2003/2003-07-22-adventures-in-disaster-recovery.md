---
layout: post
title: Adventures in disaster recovery
date: 2003-07-22 16:07:51.000000000 +02:00
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
<p>Today I found out what happens on a virtual server when the disk space is full and a piece of spam mail arrives.</p>
<ol>
<li>The spam gets filtered to the spam folder</li>
<li>The mail cannot be saved, so return to sender</li>
<li>The sender is the spam filter, namely me. Send an error message via mail</li>
<li>The mail cannot be saved, so return to sender</li>
<li>Repeat <i>ad infinitum</i></li>
</ol>
<p>At which point I opted to resize my diskspace. 45 minutes later, we were back online.</p>
