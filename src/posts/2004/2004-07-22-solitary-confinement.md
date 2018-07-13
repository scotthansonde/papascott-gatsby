---
layout: post
title: Solitary Confinement
date: 2004-07-22 22:07:38.000000000 +02:00
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
<p>The past few days I've been setting up some small scale FreeBSD jails. Setting up a full scale jail is <a href="http://www.freebsd.org/cgi/man.cgi?query=jail&apropos=0&sektion=0&manpath=FreeBSD+4.10-stable&format=html">well documented</a>, just run make install into some directory, and there are some <a href="http://memberwebs.com/nielsen/freebsd/jails/">nice tools to manage jails</a> once they are running. However, a full make install weighs in at over 100 MB. Even <a href="http://memberwebs.com/nielsen/freebsd/jails/docs/jail_remove.html">deleting some files</a> leaves 80 MB. That seemed to me to be too heavy... I want each jail to run just one service: a squid, an apache, a postfix, a mysql. I couldn't find anything on setting up a "thin" jail, other than the advice to "delete what you don't need".</p>
<p>However, I did find <a href="http://neon1.net/misc/minibsd.html">MiniBSD</a>, a standalone system designed to fit on a Compact Flash card. By building it, then deleting the files not needed for a jail, I ended up with 15 MB. I needed to add some things back (pam libraries, pkg tools), but then I had a tight system with sshd and the ability to install packages. To set up a new jail, I can unjust unpack my tar, set up an alias interface, and start it up. For squid or postfix I just need two packages. Apache requires a few more.</p>
<p>My goal is to have all my network services running in its own jail, 3 or 4 jails per PC, each jail with a redundant setup on another machine. When a system goes down, I can use <a href="http://www.boutell.com/rinetd/">rinetd</a> to bounce the original IPs into the backup jail... no playing with firewalls or DNS tables to get back going. The host machines have no ports other than ssh open... only the jails are visible to the outside world. You may break one of my services, even gain root with it, but you're still behind bars.</p>
