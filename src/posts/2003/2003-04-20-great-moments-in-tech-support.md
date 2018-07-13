---
layout: post
title: Great Moments in Tech Support
date: 2003-04-20 18:04:09.000000000 +02:00
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
<p>It was a beautiful Easter Sunday today. The weather was almost as nice in our backyard as in Florida. One thing I missed while I was gone was a new 4.x release of <a title="The FreeBSD Project" href="http://www.freebsd.org/">FreeBSD</a>, so I opened up the ThinkPad on the patio and set about updating the BSD machine and the ThinkPad itself. Update source, build world, build kernel, install kernel, reboot, install world.</p>
<p>Everything went smooth as silk, but a few minutes after booting up the ThinkPad, it starting beeping, quietly but consistently, every three minutes or so. Had I mistakenly turned on power management? A cosmetic flaw in my ThinkPad is that the battery doesn't charge. OK, that would be a fatal flaw for most users, but I only use the ThinkPad around the house and plugging in to an outlet isn't that big a deal. But power management would complain about a low battery.</p>
<p>So I checked 'ps -ax', but no apmd is listed. I check /var/log/messages... nothing unusual there. The machine beeps again. I shut down X. I do a restart. The beeps continue. I turn the sound volune down to zero. I check the BIOS settings. The machine beeps again. Frustrated, I turn the whole thing off.</p>
<p>The machine beeps again.</p>
<p>Now that I have the screen folded down, I see that one of our cordless phone handsets is on the patio table. The battery is low, and it is beeping, quietly but consistently, every three minutes or so.</p>
