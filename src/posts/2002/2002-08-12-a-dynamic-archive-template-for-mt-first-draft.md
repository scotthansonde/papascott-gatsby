---
layout: post
title: 'A Dynamic Archive Template for MT: First Draft'
date: 2002-08-12 05:08:09.000000000 +02:00
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
<p>As I've mentioned before, I'd really like to avoid building static archive files in Movable Type. Below is my first attempt to duplicate the Individual Entry Template using php to extract the entry from the MySQL database. It's totally 0.01: uncommented, unoptimized and lacking any error checking. But, at least for me, it outputs a reasonable facsimile of an individual entry. This is very a much a work in progress, but I wanted to post something since I probably won't be able to work on this for the next couple of weeks.</p>
<p><b>Update:</b> This is a real stupid brute-force approach. I simply took the default template and replaced all MT tags with PHP code. A smarter approach might be a parser to translate the MT tags on the fly. Or maybe not. This is a work in progress. But I think I said that already.<br />
<?php if($_SERVER[PHP_SELF]=='/index.php') { ?><br />
Hit the 'more' link to see the code.<br />
<?php }?><br />
<!--more--><br />
entry.php, version 0.01. Call as "entry.php?id=xxxx" where xxxx is some entry number.</p>
<p><?php show_source ($DOCUMENT_ROOT."/examples/entry_v0.01.txt");?></p>
