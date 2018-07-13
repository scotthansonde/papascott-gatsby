---
layout: post
title: Stupid Tricks with Active Directory
date: 2005-03-20 09:44:36.000000000 +01:00
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
<p>Did you know that if you enable interactive login for a particular user in a domain with Active Directory, you then disallow allow logins for all other users in the domain? Including Administrator? For all machines in the domain?</p>
<p>Pardon me, I have to go in and reboot our server in safe mode so I (and everyone else) can log back in.</p>
