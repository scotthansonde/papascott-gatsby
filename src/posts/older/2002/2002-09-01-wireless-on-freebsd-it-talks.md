---
layout: post
title: Wireless on FreeBSD - It Talks!
date: 2002-09-01 08:09:46.000000000 +02:00
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
<p>After <a href="/2002/06/23/1781.php#001781">being</a> very <a href="/2002/07/08/1798.php#001798">frustrated</a> trying getting WiFi to work with a FreeBSD notebook and my Linux router a few weeks ago, yesterday I decided to try it again, being unhappy with the difficulty of Mandrake current and last week half-heartedly installing Debian.</p>
<p>The trick was that there is no trick. Even though the Linux router is not a an access point, it's not in demo adhoc mode, but rather in IBSS mode. The FreeBSD defaults for the <a href="http://www.freebsd.org/cgi/man.cgi?query=wi&amp;apropos=0&amp;sektion=0&amp;manpath=FreeBSD+4.6-RELEASE&amp;format=html">wi </a> device work out of the box. I set the network name and off she goes.</p>
<p>Reference: <a href="http://www.live.com/wireless/unix-base-station.html">Using a Unix computer as a 802.11 wireless base station</a>: "The terminology here can be rather confusing, because some 802.11 vendors, e.g., Aironet, refer to IBSS mode as 'ad hoc'."</p>
