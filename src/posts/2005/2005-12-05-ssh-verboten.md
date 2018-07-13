---
layout: post
title: '''ssh'' verboten'
date: 2005-12-05 10:40:55.000000000 +01:00
categories:
- papatech syndicated
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
<p>Funny, when I first tried to publish the VPN post yesterday, I kept getting the strange error 'Precondition Failed'. PapaTech is hosted at <a href="http://textdrive.com/">TextDrive</a>, and it turns out they do some very aggresive filtering with mod_security, including the names of certain Unix commands like 'ssh', 'wget', and 'echo' which can be used in HTTP requests to run commands on unsecure servers. The side-effect is it's not possible to mention 'ssh' (without quotes)  on a site hosted at TextDrive.</p>
<p>Actually, at TextDrive you can <a href="http://kb.textdrive.com/article/disabling-mod_security" title="TextDrive Knowledge Base: Disabling mod_security">disable mod_security in your .htaccess file</a>, or even modify the stock ruleset, but it doesn't work if you proxy lighttpd in front of their Apache, like PapaTech does.</p>
