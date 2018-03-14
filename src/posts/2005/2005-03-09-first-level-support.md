---
layout: post
title: First Level Support
date: 2005-03-09 23:11:41.000000000 +01:00
categories:
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
---
<p>One of the, er, joys of my new job is administering a spanking new <a href="http://lumma.de/eintrag.php?id=1361" title="Citrix [Lummaland - das Weblog]">Citrix server</a> on Windows Server 2003, as well as the accounts of those who use it. This is a new experience for me, since before I was strictly a network admin, which meant 1) no Windows and 2) no users. In the jargon of the trade, I performed second, not first, level support. Now at nu2m I am first, second, last, and all levels of support in between.</p>
<p>So it was with some trepidition that I approached my leading problem this morning, namely that the Citrix users in Cologne weren't able to find their local printers. I tried to approach the problem technically, logging in on a test account, but alas I was able to print find my local printer, so I couldn't reproduce the problem. I checked the account permissions, and they were all set up to automatically use local printers. Checking the printer directory, a printer was in fact set up for one of the users but not the other (who had been logged in for over a week). After over an hour I still couldn't tell what was wrong with them that wasn't wrong with me, so I had them give me a call.</p>
<p>The problem was not technical at all. I talked the first user through trying out Wordpad, and the problem was just that the sever had selected the PDF Writer as her default printer, and she wasn't aware that her real printer was there waiting to be selected. For the other user, the printer appeared after she logged out and logged back on. </p>
<p>So I could have read FAQs and Googled and tested all day long... there was no way I could have solved the problem by myself until I actually talked to the users myself. It doesn't matter that the solution was hand-holding over the phone instead of a clever admin trick. The problem was solved, the users could now do their work. And that's what my job is, enabling people to work <strike>(so I don't have to)</strike>.</p>
<p>Oh, and don't worry about <a href="http://lumma.de/eintrag.php?id=1361" title="Citrix [Lummaland - das Weblog]">Nico's sreeenshot</a>, I've set our firewall so that he can't do any more blogging or surfing under Citrix.</p>
