---
layout: post
title: Another fine moment in systems administration
date: 2004-03-15 18:03:32.000000000 +01:00
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
<p>A month ago I replaced the system on a monitoring server, a low-powered PC that stores our syslogs and runs <a title="A high performance, extremely flexible system for monitoring trends in time-series data." href="http://cricket.sourceforge.net/">Cricket</a>, collecting various statistics via SNMP. It also serves as the serial console for most of our Suns, so the machine has to stay up and usable. Over the past couple of weeks performance had degraded steadily. Rebooting would solve the problem at first, but within an hour the load would again be maxxed out, even though the CPU was mostly idle and no RAM was being swapped. I installed a new kernel. I replaced the network card (which was spewing errors). I tried stopping services. I turned off the software RAID. Nothing helped.</p>
<p>Finally today I stumbled upon the answer. The mail logs from our postfix servers were not being rotated. We had customized syslog to save the mail logs with non-standard names, and my predecessor had put the logrotate configuration for the custom log files not where I'd expect, in /etc/logrotate.conf (which I had copied over from the old system), but in a file named 'guenther' (name changed to protext the guilty) under /etc/logrotate.d/. Cricket was performing a number of greps every 5 minutes on that log file, which by now was at over 200 MB.</p>
<p>I copied over the file, renamed it guenther_<a title="LEO Results for 'blödmann'" href="http://dict.leo.org/?search=bl%F6dmann">bloedmann</a>, ran a manual logrotate, and everything now seems fine.</p>
