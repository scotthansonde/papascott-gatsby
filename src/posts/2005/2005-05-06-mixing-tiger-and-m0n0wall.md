---
layout: post
title: Mixing Tiger and m0n0wall
date: 2005-05-06 08:20:01.000000000 +02:00
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
---
<p>I don't really depend on my Powerbook for work, since I can get a browser and an ssh window in just about any operating system, so I was adventurous and installed <a href="http://www.apple.com/macosx/">Tiger</a> when it arrived last weekend. Quick review: everything seems faster, <a href="http://www.apple.com/macosx/features/spotlight/">Spotlight</a> is weird, <a href="http://www.apple.com/macosx/features/dashboard/">Dashboard</a> is lame.</p>
<p>But I've run into an obscure and annoying bug. At work we run <a href="http://m0n0.ch/wall/">m0n0wall</a>, a tiny firewall based on FreeBSD (and which I can heartily recommend). The only access is via a web front-end (mini\_httpd with php).  I found that accessing the m0n0wall with Firefox under Tiger causes the <a href="http://comments.gmane.org/gmane.comp.security.firewalls.m0n0wall/16455" title="gmane.comp.security.firewalls.m0n0wall">mini\_httpd in m0n0wall to crash</a>. The firewall is still running, you just can't view or change settings. It took me 3 or 4 crashes to associate them with Tiger, but then I was able to reproduce the behavior, and it was confirmed by another member of the mailing list.</p>
<p>mini\_httpd might be sensitive; there was a <a href="http://comments.gmane.org/gmane.comp.security.firewalls.m0n0wall/7298">previous bug reported</a> involving crashes on m0n0wall. And Tiger seems to have some <a href="http://news.zdnet.co.uk/communications/networks/0,39020345,39197135,00.htm" title="Networking firms lash out at Tiger - ZDNet UK News">networking issues</a>. But for now you'll want to avoid accessing m0n0wall with Firefox under Tiger, and if you administer a remote m0n0wall you might want to consider <a href="http://www.xs4all.nl/~fredmol/m0n0/">the modified m0n0wall image with ssh</a> so you can restart mini_httpd without physically rebooting.</p>
