---
layout: post
title: The art of updating gracefully
date: 2004-02-06 05:02:45.000000000 +01:00
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
<p>One thing I've come to appreciate maintaining FreeBSD machines is the benefit of keeping systems continuously up to date. It's like going to the dentist... you are going to have to do it sometime anyway, and the sooner and more often you do it, the less it's going to hurt. FreeBSD makes it easy to keep current, since the applications in the ports are separated from the system itself. You can update the ports as needed, and I choose to update the system only every 2nd minor version with security patches as needed. </p>
<p>My co-workers on the Linux side were more of the "never touch a running system" philosophy, so I inherited a few machines with, shall we say, a few cobwebs. Yes, the services that are there still run, but eventually you're going to need a new feature or a security patch. It's then impossible to add anything new without compiling all components by hand, and even then it might be impossible to get a current PHP or OpenLDAP running. My oldest victim is a fax server with RedHat 6.something, with a 2.0 kernel from 1999. </p>
<p>My policy for Linux is that all servers will run a supported distribution. We will use stock RPMs when we can, and produce our own RPMs when we cannot. When security patches are no longer available, we will <a href="http://www.pclinuxonline.com/modules.php?name=News&amp;file=article&amp;sid=7018" title="How to upgrade Mandrake easily with only one reboot">upgrade in place</a>. I was able to upgrade 8.x machines to 9.2 without problem. For the 7.x machines it was easier to do a fresh install and migrate. That old RedHat machine is still waiting for me. But if I stick to my policy, I'm never going to have to do this again.</p>
<p>And it's a good idea to reboot every couple of months or so. We're not trying to set any uptime records here, and you need to know that in case of a power cut, everything will come back up.</p>
