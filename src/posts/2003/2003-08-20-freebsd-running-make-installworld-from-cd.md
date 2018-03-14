---
layout: post
title: 'FreeBSD: Running ''make installworld'' from CD'
date: 2003-08-20 06:08:38.000000000 +02:00
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
<p>Sorry, non-tech folks. This is a sysadmin voodoo post.</p>
<p>I maintain several FreeBSD machines. When a security alert is issued, the standard procedure is to update the source for your release with cvs or cvsup, then recompile and reinstall the system with 'make buildworld' and 'make installworld'. It's also fairly standard procedure to <a title="Tracking for Multiple Machines" href="http://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/small-lan.html">'make buildworld' on one machine</a>, then export /usr/src and /usr/obj read-only via NFS to do installworld on the target machine. </p>
<p>However, my FreeBSD machines are behind a firewall inside a DMZ. I can't mount NFS through the firewall, and I don't really want to be compiling systems on underpowered small-disk single-purpose machines in a DMZ. At first, I used installation CDs to update major versions. This is not very flexible and may not include the latest security patches. Lately I've been plugging the DMZ machines temporarily into the LAN to update over NFS. This is unelegant and may damage the cables and switches (not to mention my fingers) when unplugging.</p>
<p>However, through trial and error (I haven't seen this tip anywhere), I figured out that after running 'make buildworld' on the build machine, I can burn /usr/src and /usr/obj on CD, and then run 'make installworld' from it on the target machines. The trick is you can't just have symlinks from /usr/src and /usr/obj to the CD. You've got to have actual mounts. In this case, <a title="mount_null (8)" href="http://www.freebsd.org/cgi/man.cgi?query=mount_null&amp;sektion=8&amp;apropos=0&amp;manpath=FreeBSD+4.8-RELEASE">null mounts</a> work wonders. (Ignore the bit about 'not fully supported' and 'this doesn't work'.) If the CD is mounted on /cdrom, then:<br />
<code>mount -t null /cdrom/src /usr/src<br />
mount -t null /cdrom/obj /usr/obj</code></p>
<p>You can then cd /usr/src and do your make installs and mergemaster. If you're really brave, you can do this while your services are running (single-user mode is for wimps), and then your only downtime is the reboot.</p>
