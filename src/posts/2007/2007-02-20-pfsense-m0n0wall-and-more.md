---
layout: post
title: 'pfSense: M0n0wall and more'
date: 2007-02-20 22:19:39.000000000 +01:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401628623'
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
<p>I've been a big fan of the FreeBSD-based firewall <a href="http://m0n0.ch/wall">M0n0wall</a> for some time. Yesterday I finally got around to trying out <a href="http://www.pfsense.com/">pfSense</a>, which is based on M0n0wall but which can take advantage of bigger hardware. It's only been a day, but I think I'm hooked.</p>
<p>M0n0wall was developed for embedded devices, and can work with a minimum of CPU, memory and disk (or CF). That means that it doesn't have some features you might find handy in a firewall, like a login shell or a packet sniffer (<a href="http://www.xs4all.nl/~fredmol/m0n0/">they can be hacked in</a>, but still). M0n0wall does run on x86 hardware, but it's going to <a href="http://doc.m0n0.ch/handbook/faq-goals.html">remain focused on small hardware</a>. pfSense started as a friendly fork a couple of years ago to add features and a more recent FreeBSD for those with hardware to support them. We're not talking massive hardware here... <a href="http://www.pfsense.com/index.php?id=43">128MB RAM and CF</a> (as opposed to <a href="http://m0n0.ch/wall/hardware.php">64MB RAM and 8MB CF</a> for M0n0wall).</p>
<p>pfSense released 1.0 last fall, but my M0n0walls at home and at work have been working well, so I never looked into it. We're now considering infrasructure changes at work, and it'd be nice to have <a href="http://openvpn.org/">OpenVPN</a> on the firewall. pfSense has it. I run the CD-ROM version of M0n0wall on an old PC at home, with settings saved on a floppy. I inserted the pfSense CD and rebooted. It took over the M0n0wall settings and just worked. Over the console I was able to copy the running system to hard disk, so I can now add packages and install updates.</p>
<p>Just clicking through the interface I found a half dozen reasons to consider switching even running systems:</p>
<ul>
<li>SSH login with standard command-line tools (mmmm, <a href="http://en.wikipedia.org/wiki/Tcpdump">tcpdump</a>)</li>
<li>OpenVPN on board</li>
<li>Aliases for groups of hosts, networks and ports</li>
<li>Add-in packages for <a href="http://insecure.org/nmap/">nmap</a> and <a href="http://www.ntop.org/">ntop</a></li>
<li>NAT reflector (NAT addresses available from LAN, makes routing <em>much</em> simpler)</li>
<li>Load Balancer</li>
</ul>
<p>The aliases should be real nice since I was raised on the object model in <a href="http://www.checkpoint.com/">CheckPoint</a>. One drawback of M0n0wall is that it's hard to keep the rules organized, the more intelligent aliases in pfSense should make the rules a bit more managable.</p>
