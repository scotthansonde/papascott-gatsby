---
layout: post
title: Adventures With Windows CE
date: 2002-08-10 22:08:00.000000000 +02:00
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
<p>After being impressed by one of her franchisees, Mama bought a used Casio E-125 Pocket PC on Ebay a couple of weeks ago. She was going to try out my old Palm III, but while she was thinking about it Christopher grabbed it from her desk and threw it down the stairs. End of Palm III, but I digress. She'd really like to sync it with her Lotus Notes client, but I can see already that getting Pocket Outlook and Notes to work together will be an adventure and a half, so I thought we'd start small and try to sync with Outlook, which is supported out of the box.</p>
<p>I don't get around much, I know, but I've never used Outlook. I don't even know what it looks like, at least I didn't until today. But it was included with ActiveSync, so I thought could just install it and sync to it. But, no, our E-Bay seller forgot to include the original CD pocket with the  product key, so I can't install it from there. No problem, we have Office 2000, so I'll just add Outlook to her Office installation.</p>
<p>But Office refuses to do so. I've repartitioned and added a CD burner since installing office, so it's looking for the CD in the wrong place. No way to update the installation. So I thought I'd uninstall and reinstall Office. Uninstall went fine. Reinstall died, not just once, but three times. I'm starting to sweat now. Mama needs Office to work on her PC at all. I finally think to clean out the registry, restart, and install from the burner, a more reliable device than the CD-ROM. Finally success. We have Outlook, and the rest of Office as well.</p>
<p>But ActiveSync refuses to sync with Outlook. OK, I should have installed Outlook first. Uninstall, reinstall ActiveSync. Still refuses. Remove the partnership to the Pocket PC, it now connects as guest, and now I want to reestablish the partnership. But I can't do it. There is no menu point to establish a partnership, a wizard is supposed to start automatically. But I keep connecting as guest. Update to ActiveSync 3.5. Still guest. Delete the guest profile. Still guest. Search desparately in Google, try changing registry settings. Still guest. See a hint to hit the reset button on the Pocket PC.</p>
<p>That does the trick. The wizard pops up to setup a partnership, and the calendar entries get synced to Outlook. Eight hours after I started.</p>
<p>And people say Linux is hard.</p>
