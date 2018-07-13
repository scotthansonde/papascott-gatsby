---
layout: post
title: Work Less Harder
date: 2004-06-09 17:06:04.000000000 +02:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>When I first saw this graph of the CPU usage at my web host for the last month, I thought that WordPress was using less CPU than Movable Type had. </p>
<p><img src="http://www.papascott.de/wordpress/wp-content/uploads/2004/06/1month-cpumins.png" alt="CPU activity for 1 month" /></p>
<p>But then I remembered that I turned off a busy database cron job at the same time I switched blog software. That must explain it, since MT is busy in spurts, not continuously like in the graph.</p>
