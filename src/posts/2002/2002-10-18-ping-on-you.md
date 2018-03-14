---
layout: post
title: Ping On You
date: 2002-10-18 21:10:44.000000000 +02:00
categories:
- work
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
<p>I'm not a TCP/IP expert, but I got to feel like one today. Our Notes admin Stefan was wondering why the virus checker in Leipzig wasn't able to download updates from the web over the Squid proxy, even though it was set up exactly like the one in Hamburg.  The proxy even has the same internal IP, but it couldn't be found. And the proxy logs didn't even show an attempt to connect. So it's <a href="http://www.tcpdump.org/">tcpdump</a> and <a href="http://www.ethereal.com/">ethereal</a> to the rescue. They confirmed that Notes never did try to connect to the proxy, but was trying to do a reverse DNS lookup on the IP address. The DNS in Leipzig must be broken, the lookup fails. When Stefan entered the hostname of the proxy instead of the IP address, the download worked. Even though the instructions say to enter an IP address. Go figure.</p>
