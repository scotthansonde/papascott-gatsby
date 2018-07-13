---
layout: post
title: I Not Heart Jabberd
date: 2005-10-24 09:55:34.000000000 +02:00
categories:
- papatech
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
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>When I started last winter at nu2m, our web sites ran on One Big Server For Everything (OBSFE). It's very difficult to upgrade or do maintenance on an OBSFE, since when it breaks, everything breaks, and people tend to get upset when that happens. So my job the past few months has been to network, cluster, cajole developers to get their apps to work in a cluster, and delete all references to 'localhost' from all configuration files. (In a cluster, localhost is not what you think it is, it's a black hole, so just forget it exists.) Late last week I was finally done. Nothing more was running on the OBSFE, all websites and databases were ported, and I was free to format and reinstall the OSBFE to become an upstanding member of our cluster.</p>
<p>Except for one thing. The <a href="http://jabberd.jabberstudio.org/1.4/">jabberd</a> server. Our company depends on jabber for internal communication, and we had a jabberd on the OBSFE tied to an external IP address. Fine, I thought, just move the whole thing to a new server, put the address there, and it should work. It did, but only half way. Clients could connect, but servers could not and all transports (connections to AIM, ICQ, MSN, Yahoo!, etc.) were broken as well. OK, back to the drawing board. I ended up setting up everything from scratch, taking a day and a half for a job I thought would take a couple of hours (and I'm not done yet), and I came to hate the beast that is jabberd. Note that the following comments are completely subjective, and may have no basis in fact.</p>
<ol>
<li>The jabberd server consists only of a jabber server, which is fine if you only want to talk to yourself and other jabber servers. The transports to other services are what make jabber really useful and interesting, and they are all separate little projects. Good luck finding current and working versions for them. And don't confuse <a href="http://jabberd.jabberstudio.org/1.4/">jabberd</a> with <a href="http://jabberd.jabberstudio.org/2/">jabberd2</a>. They are completely separate projects and have nothing to do with one another.</li>
<li>The host setup is somewhat arcane. Jabberd works fine out of the box if you have a single box with a public IP open to everyone. Now most of us in the real world have firewalls and NAT to protect our servers, with private IPs on the servers themselves, and divide the services for a domain among several servers. Through trial and error I found a setup that worked (main hostname uses a private name, public hostnames set up as additional hosts).</li>
<li>The latest jabberd is 1.4.4, which contains major changes to the previous 1.4.3.1. The <a href="http://jabberd.jabberstudio.org/1.4/doc/adminguide">published installation instructions</a> no longer apply, and all previous transports will not compile correctly. The workaround is to complile the transports against the old versions and copy the .so files into the new version. This information seems only to be available in the mailing list archive, but is essential especially for <a href="http://aim-transport.jabberstudio.org/">AIM and ICQ</a> to work.</li>
<li>The MSN transport requires a curl library with SSL certificates. The SuSE curl packages don't include the certificates, so the transport fails with strange error messages. The are also 2 different packages you can use, a msn-transport (which we have) and a <a href="http://msn-transport.jabberstudio.org/">pymsn</a>. I couldn't find a homepage or any current information for msn-transport.</li>
<li>The current <a href="http://yahoo-transport-2.jabberstudio.org/">Yahoo! transport</a> contains the wrong hostname to connect to Yahoo! You have to know this, search the mailing lists for the proper hostname, and correct the configuration by hand.</li>
</ol>
<p>After a day and a half I'm to the point where everything seems to work from the outside and with any domain I point to the server (without using any external IPs, yay!). Now I just have to get it working for the internal network. Then I can finally get rid of the monster OBSFE!</p>
