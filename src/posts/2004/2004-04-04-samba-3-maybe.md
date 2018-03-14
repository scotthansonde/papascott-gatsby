---
layout: post
title: Samba 3... maybe?
date: 2004-04-04 20:04:31.000000000 +02:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401632091'
  _social_notify: '1'
  _wpcom_is_markdown: '1'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>Sometimes when you <a title="PapaScott: Samba 3... not!" href="http://www.papascott.de/2004/03/30/2955.php">don't know what you're doing</a>, you have to ask for help. So now I think I <a title="[Samba] PDC migration from samba-tng to samba 3" href="http://lists.samba.org/archive/samba/2004-April/083728.html">know</a> what went wrong with our first attempt. Samba calculates the SID for each user dynamically, and samba-tng uses a different formula than samba 3. For users to continue to work after switching to samba 3, their SIDs must be explicitly set to the old values. Since smbpasswd does not store SIDS, the user information has to be stored in a database, preferably ldap, but for our small network tdbsam will suffice.</p>
<p>Almost as an aside, I also <a title="[Samba] Re: Group mapping: several unix groups to one Windows group?" href="http://lists.samba.org/archive/samba/2004-April/083765.html">found out</a> that I was mapping the unix groups incorrectly. So will the switch to samba 3 now work? We can test ahead of time, but we will only know for sure when we go live.</p>
