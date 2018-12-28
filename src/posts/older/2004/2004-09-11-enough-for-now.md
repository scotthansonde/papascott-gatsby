---
layout: post
title: Enough For Now
date: 2004-09-11 05:09:22.000000000 +02:00
categories:
- blogging
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
<p>That's enough of the <a href="/bl.php">Bloglines layout</a> for now. It might come back some day, though. I find the layout very functional, and I may work out actual templates with a sidebar and more weblog-like features.</p>
<p>The trick yesterday was to use wget to get the public copy of my blog from bloglines, insert a &lt;base href...&gt; in the html header so the relative links worked correctly, and add bl.php to the beginning of the DirectoryIndex line in my .htaccess to make it the default page. </p>
<p>This was all powered by an hourly cron job, since bloglines reads my blog only once per hour. It's not a script, but a one-liner with sed. If I put the long bloglines URL into a tinyurl, it looks like:</p>
<p><code>/usr/local/bin/wget -O - 'http://tinyurl.com/5zekr' | sed -e 's/&lt;title>/&lt;base href="http:&#92;/&#92;/www.bloglines.com&#92;/">&lt;title>PapaScott/' > /usr/local/www/data/bl.php</code></p>
