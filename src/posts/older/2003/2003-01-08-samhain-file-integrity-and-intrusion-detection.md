---
layout: post
title: Samhain - File Integrity and Intrusion Detection
date: 2003-01-08 20:01:27.000000000 +01:00
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
<p>At work I've been looking at <a title="samhain labs" href="http://la-samhna.de/samhain/">Samhain</a>, a file integrity system similar to <a title="Advanced Intrusion Detection Environment" href="http://www.cs.tut.fi/~rammer/aide.html">AIDE</a> or <a href="http://www.tripwire.org/">Tripwire</a>, but with many additional features, like signing of logs and config files, detection of rogue kernel modules, stealth operation, logging to SQL databases, and encrypted client/server communications. It can probably brew coffee, too, but I haven't found it in the docs yet. The configuration is a bit complicated, but it looks promising. </p>
<p>The idea of a file integrity system is not to prevent hackers (or rogue employees) from attacking a system, but to be quickly aware of an attack before the attacker has a chance to cover his tracks. It involves keeping cryptographic signatures of important files so that changes can be detected even if the file size and timestamp remain the same.</p>
