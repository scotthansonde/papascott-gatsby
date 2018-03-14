---
layout: post
title: Interruptible Power Supply
date: 2006-11-19 09:09:38.000000000 +01:00
categories:
- work
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401629469'
  _social_notify: '1'
  _wpcom_is_markdown: '1'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>When I take time off from work, disasters seem to happen at a rate of about 50%. One time it was a friendly developer who started a script that brought a server to its knees, another time it was a l33t haxx0r (that's pond scum in plain English). Or a database suddenly becomes too big for its britches and its CPU. Last year when I was the only admin at nu2m I was a lot more concerned about such things, but that that there are 4 of us we should be covered.</p>
<p>Well, maybe we're as far as skill and experience are concerned but not with luck. I took Friday off to accompany my lovely wife to a gala dinner in Munich. (Heidi Klum was supposed to be there, but she's still too pregnant.) We're in our 5-star hotel, we have to leave in 30 minutes, I'm changing into a tuxedo, literally standing in my underwear, when my cell phone rings. Our hoster is replacing the UPS that failed earlier in the week, something went wrong, and we lost power to half our rack in Hamburg. Again.</p>
<p>As an aside, I'm beginning to thing that the 'uninterruptible' in 'uninterruptible power supply' is a cruel joke. I've had far more experience with losing power from a failed UPS or from poor handling of a UPS than actual power outages. The best story is from my old company, when the boss was demonstrating a UPS and cut power to all servers attached to it.</p>
<p>In theory, the important machines have redundant power supplies and will keep running when one circuit goes down. In practice some things always fail (in this case a RAID that should have stayed up but didn't) and need personal attention to get back up and running, especially since we had had an outage earlier in the week and some services had been moved. In my underwear in Munich, though, I couldn't do much for the cluster in Hamburg. However, while we may have some single points of failure for the cluster, I am not one of them. My <a href="http://putzi.blogg.de/">colleague</a> in Cologne only had to check a couple of small things with me, and had everything back up within an hour.</p>
<p>Employees in Germany are legally entitled to vacation time, so nu2m can't get any ideas about preventing disasters by refusing all my requests for days off. Besides, disasters have also occurred on days I'm not off, so it wouldn't be a sure policy.</p>
