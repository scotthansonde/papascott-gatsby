---
layout: post
title: Strip Comments
date: 2004-12-31 12:22:01.000000000 +01:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401631823'
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
<p>This is perl one-liner to strip comments from a text file (found in the documentation for <a href="http://www.openfusion.com.au/labs/mod_auth_tkt/">mod&#95;auth&#95;tkt</a>). I'm posting it here so I can google for "strip comments" when I need it.</p>
<p><code>perl -ne 'print if /^\s*[^#\s]/'</code></p>
