---
layout: post
title: The New Old Blogroll
date: 2002-10-20 15:10:10.000000000 +02:00
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
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>I'm now including the update times in my blogroll like I used to. <a href="http://www.blogrolling.com/">Blogrolling</a> makes my data available as a <a href="http://rpc.blogrolling.com/rss.php?r=ff5c543c6d32b2efee7f40bbb537da2d">chronologically sorted RSS file</a>, which I can parse quite easily using the <a href="http://magpierss.sourceforge.net/">Magpie RSS Parser</a> for PHP (thanks to <a href="http://traumwind.tierpfad.de/blog/">Martin</a> for the tip). Magpie chokes if any entities are in the file, but since I set the titles myself, I can easily avoid that. I do need to do a bit a parsing to convert the 'Last updated' string to a time/date I can use. One advantage over the data from <a href="http://www.blo.gs/">blo.gs</a> is that I can include sites that do not ping weblogs.com when they update. They land at the bottom of the list. Eventually I'll figure how to check them for updates as well (RSS feed? HTTP headers? md5 sums?).</p>
<pre>&lt;h4>blogroll (CET):&lt;/h4>
&lt;?php
require_once('./blogroll/rss_fetch.inc'); #magpie rss parser
# in rss_fetch.inc I've set $CACHE_AGE to 60*10 instead of 60*60
$url = 'http://rpc.blogrolling.com/rss.php?r=ff5c543c6d32b2efee7f40bbb537da2d';
list( $rss, $status, $msg) = fetch_rss( $url );
$yesterday=strtotime('0:00 yesterday');
foreach ($rss->items as $item ) {
    $t = str_replace(array('Last updated: ','on '),'',$item[description]);
    $t = strtotime($t);
    $fmt = $t > $yesterday ? "H:i" : "d M";
    $date = $t>0 ? date($fmt,$t) : '-';
    if ($t>0) $title = "Last updated: ".date('H:i:s',$t).
        " CET on ".date('l, F d',$t);
    else $title = "Last updated: unknown";
    echo "&lt;a href="$item[link]" title="$title">";
    echo "$date $item[title]";
    echo "&lt;/a>&lt;br />n";
}
?></pre>
