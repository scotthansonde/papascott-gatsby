---
layout: post
title: 'Dynamic Archives: It''s All Wrong'
date: 2002-08-15 22:08:45.000000000 +02:00
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
<p>Remember the <a href="https://www.papascott.de/2002/08/12/1844.php#001844">Dynamic Archive Template for MT</a> I presented a couple of days ago? Well, I've changed my mind. It's the wrong approach for the problem I'm trying to solve. Instead of recreating the MT tags in PHP (and losing the ability to add custom tags like Brad Choate's <a href="http://www.bradchoate.com/past/mtmacros.php">MT Macros plugin</a>), I should instead be using PHP to prompt MT to rebuild and save a static page on demand when it's missing, kind of like <a href="http://traumwind.tierpfad.de/blog/?detail=2002-08-01_16-03">Martin was talking about</a> a couple of weeks ago. Oh well, it was a good exercise anyway.</p>
